//module imports
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const session = require("express-session")
const MongoDBStore = require('connect-mongodb-session')(session)
require('dotenv').config();


const DATABASE_PATH = process.env.MONGO_URI || null
const PORT = process.env.PORT || 3030

const app = express()

//to serve static files like images
app.use('/recipesImages', express.static('./recipesImages'));

//middlewares to use 
app.use(cors({
    origin: "http://localhost:5173", // React app URL
    credentials: true               // allow cookies
}));

//body parsers - To take input data
app.use(express.json());
app.use(bodyParser.urlencoded())

//session store - to store the session in mongodb
const store = new MongoDBStore({
    uri: DATABASE_PATH,
    collection: 'mySessions'
})

//session middleware
app.use(session({
    secret:"MySuperKey",
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie:{maxAge:1000*60*60*24}
}))

//local imports 
const ErrorRouter=require("./Router/ErrorRouter")
const RecipeRouter=require("./Router/RecipeRouter")
const UserRouter=require("./Router/UserRouter")
const Mongoose  = require("mongoose")

app.use("/api/connection",RecipeRouter)
app.use("/api/users",UserRouter)
app.use(ErrorRouter)



Mongoose.connect(DATABASE_PATH).then(()=>{
    console.log("MongoDB is connected")
    app.listen(PORT,()=>{
        console.log(`App running on http://localhost:${PORT}`)
    })
}).catch(error=>{
    console.log("Error occured while Connecting Mongoose",error)
})
const Mongoose = require("mongoose");

const RecipeSchema = Mongoose.Schema({
    RecipeName:{
        type:String,
        required: true,
    },
    RecipeAuthor:{
        type:String,
        required:true,
    },
    RecipeDescription:{
        type:String,
        required:true,
    },
    RecipeIngredients:{
        type:[String],
        required:true,
    },
    RecipeDuration:{
        type:Number,
        required: true,
    },
    RecipeRating:{
        type:Number,
        required: true,
    },
    RecipeInstructions:{
        type:[String],
        required: true,
    },
    RecipeType:{
        type:String,
        required: true,
    },
    RecipeImg:{
        type:String,
        required: false,
    },
    userID:{
        type: Mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }
})

module.exports = Mongoose.model("Recipe",RecipeSchema)
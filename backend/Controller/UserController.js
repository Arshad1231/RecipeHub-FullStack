import User from "../Model/User.js"

export const RegisterUser=async(req,res,next)=>{
    try {
        const {FirstName,LastName,Email,Password,Gender,DOB,Occupation,Country,Description} = req.body;
        console.log("Data from frontend:", FirstName,LastName,Email,Password,Gender);
        const NewUser = new User({FirstName,LastName,Email,Password,Gender,DOB,Occupation,Country,Description})
        await NewUser.save().then(()=>{
            console.log("The User was Registered Successfully")
        }).catch(
            error=>{
            console.log("Error Occured while Saving",error)
            }
        )
        res.json({
            message: "Data received from FrontEnd", 
            data : NewUser
        })
    } catch (error) {
        console.log("Error Occured while registering user",error)   
    }

}
export const CheckLoginUser=async(req,res,next)=>{
    try {
        const {Email,Password} = req.body;
        const user = await User.findOne({Email:Email,Password:Password});
        if(user){
            req.session.isAuth = true;
            req.session.user = user;
            res.json({
                message: "Login Successful",
                Data: user,
                status:true
            })
        }
        else{
            res.json({
                message: "Invalid Email or Password",
                Data: null
            })
        }
    } catch (error) {
        console.log("Error",error)
    }
}

export const LogOutUser = async(req,res,next)=>{
    try {
        req.session.destroy(err=>{
            if(err){
                console.log(err)
                return res.status(500).json({msg:err})
            }
            res.clearCookie('connect.sid')
            res.json({
                message:"User Logged out",
                status: false
            })
        })
    } catch (error) {
        console.log("Error Occured",error)
    }
}

export const CheckAuth = async(req,res,next)=>{
    try {
        if (req.session && req.session.isAuth) {
            res.json({ isLoggedIn: true, user: req.session.user });
        } else {
            res.json({ isLoggedIn: false });
        }
    } catch (error) {
        console.log("error occured",error)
    }
}
export const GetUser = async(req,res,next)=>{
    try {
        if((req.session && req.session.user)){
            res.json({UserDetails:req.session.user,message:"This is the user details"})
        }
        else{
            res.json({User:null,message:"No user"})
        }
    } catch (error) {
        console.log("error has occured",error)
    }
}
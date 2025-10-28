exports.wrongPath = (req,res,next)=>{
    res.status(404).json({
        message:"404 Page doesnt Exist"
    })
    
}
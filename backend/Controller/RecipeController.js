const Recipe = require("../Model/Recipe");
const path = require("path");

exports.RecipeAdder =  (req, res, next) => {
  try {
    
    const RecipeImg = req.file ?  req.file.filename: null;
    const {RecipeName,RecipeAuthor,RecipeIngredients,RecipeDescription,RecipeDuration,RecipeRating,RecipeInstructions,RecipeType,userID} = req.body;  
    const recipe = new Recipe({RecipeName,RecipeAuthor,RecipeIngredients,RecipeDescription,RecipeDuration,RecipeRating,RecipeInstructions,RecipeType,RecipeImg,userID})
    recipe.save().then(()=>{
      console.log("The Data was Added SuccessFully",recipe)
      console.log("Data from frontend:", recipe);
    }).catch(error=>{
      console.log("Error Occured while Saving",error)
    })

    res.json({
      message: "Data received from FrontEnd",
      received: recipe
    });
    } catch (err) {
      next(err);
    }
};

exports.RecipeGetter = async(req,res,next)=>{
  try {
    const data = await Recipe.find()
    res.status(200).json({
      message:"Here is the data",
      Recipes: data
    })
  } catch (error) {
   res.status(500).json({
    message:"Error Occured",
    Recipes: error
   }) 
  }
}

exports.GetSingleRecipe=async(req,res,next)=>{
  try {
    const {id} = req.params
    const data = await Recipe.findById(id)
    console.log("Fetched single recipe:", data);
    res.status(200).json({
      message:"Here is the data for the requested ID",
      RecipeDetails: data,
      RecipePath: `${req.protocol}://${req.get('host')}/recipesImages/${data.RecipeImg}`
    })
  } catch (error) {
   console.log("Error Occured while fetching single recipe",error) 
  }
}

exports.DeleteRecipe=async(req,res,next)=>{
  try {
    const {id} = req.params;
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({
      message: "Recipe Deleted Successfully"
    })
  } catch (error) {
    console.log("Error Occured while Deleting Recipe",error)
  }
}

exports.UpdateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const RecipeImg = req.file ? req.file.filename : undefined;
    const updateData = { ...req.body };

    if (RecipeImg) {
      updateData.RecipeImg = RecipeImg;
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(id, updateData, { new: true });
    res.json({ success: true, message: "Recipe updated successfully", updatedRecipe });
  } catch (error) {
    console.error("Error Occurred while Updating Recipe", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

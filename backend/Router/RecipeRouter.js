const express = require("express")
const upload = require("../config/multer");

const RecipeRouter = express.Router()
const RecipeController= require("../Controller/RecipeController")

RecipeRouter.post("/RecipeAdder",upload.single("RecipeImg"),RecipeController.RecipeAdder) // to add recipe
RecipeRouter.get("/details/:id",RecipeController.GetSingleRecipe) // to display single recipe details
RecipeRouter.get("/GetRecipes",RecipeController.RecipeGetter) // to get all recipes
RecipeRouter.delete("/delete/:id",RecipeController.DeleteRecipe) // to get all recipes
RecipeRouter.put("/update/:id",upload.single("RecipeImg"),RecipeController.UpdateRecipe) // to get all recipes


module.exports=RecipeRouter
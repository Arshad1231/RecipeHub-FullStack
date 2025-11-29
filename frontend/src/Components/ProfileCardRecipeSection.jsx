import React, { useEffect, useState, useMemo } from 'react'
import { GetUserRecipes, DeleteRecipe } from '../../Services/RecipeCRUD'
import { Link } from 'react-router-dom'

const RecipeSection = ({ ProfileDetails }) => {
  const [Recipes, setRecipes] = useState([])

  // Fetch only once
  useEffect(() => {
    const FetchRecipes = async () => {
      try {
        const res = await GetUserRecipes()
        if (res && res.Recipes) {
          setRecipes(res.Recipes)
        }
      } catch (err) {
        console.error("Error fetching recipes:", err)
      }
    }
    FetchRecipes()
  }, [])

  // Filter recipes by user
  const UserRecipes = useMemo(() => {
    if (!ProfileDetails || !ProfileDetails._id) return []
    return Recipes.filter(recipe => recipe.userID === ProfileDetails._id)
  }, [Recipes, ProfileDetails])

  // Delete recipe
  const HandleDelete = async (EachRecipe) => {
    const confirmDelete = window.confirm(`Delete recipe "${EachRecipe.RecipeName}"?`)
    if (!confirmDelete) return

    const response = await DeleteRecipe(EachRecipe._id)
    if (response.success) {
      alert("Recipe Deleted Successfully")
      setRecipes(prev => prev.filter(recipe => recipe._id !== EachRecipe._id))
    } else {
      alert("Failed to delete recipe.")
    }
  }

  return (
    <div className="mt-8 p-4">
      <h1 className="text-center bg-amber-500 font-submitted-recipes text-4xl text-white rounded-xl p-2 shadow-md">
        {UserRecipes.length > 0 ? "Submitted Recipes!" : "No Recipes Yet"}
      </h1>

      <div className="mt-6 space-y-5">
        {UserRecipes.map((EachRecipe, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg border border-gray-200 p-6 rounded-xl hover:shadow-xl transition-all"
          >
            
            <div className="flex flex-col gap-2">
              <h1 className="font-Login-text text-5xl font-bold text-gray-800">
                {EachRecipe.RecipeName}
              </h1>
              <p className="font-Login-text text-gray-700">
                <strong>Description:</strong> {EachRecipe.RecipeDescription}
              </p>
              <p className="font-Login-text text-gray-700">
                <strong>Duration:</strong> {EachRecipe.RecipeDuration} min
              </p>
              <p className="font-Login-text text-gray-700">
                <strong>Recipe Type:</strong> {EachRecipe.RecipeType}
              </p>
            </div>

            
            <div className="flex flex-row flex-wrap gap-4 mt-4 font-submitted-recipes">
              <Link
                to={`/details/${EachRecipe._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-3xl px-5 py-2 text-center flex items-center justify-center min-w-[100px]"
              >
                Details
              </Link>

              <Link
                to={`/edit/${EachRecipe._id}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-3xl px-5 py-2 text-center flex items-center justify-center min-w-[100px]"
              >
                Edit
              </Link>

              <button
                onClick={() => HandleDelete(EachRecipe)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-3xl px-5 py-2 flex items-center justify-center min-w-[100px]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeSection

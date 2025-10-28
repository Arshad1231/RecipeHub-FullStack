import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetSingleRecipe } from '../../Services/RecipeCRUD'
import { FaUser, FaClock, FaStar, FaListUl, FaUtensils,FaBook  } from 'react-icons/fa'

const DetailedRecipe = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [imgDir, setImgDir] = useState(null)
  const [recipeDetails, setRecipeDetails] = useState({})

  useEffect(() => {
    const getINFO = async () => {
      const Response = await GetSingleRecipe(id)
      setRecipeDetails(Response.RecipeDetails)
      console.log("Single Recipe Details:", Response.RecipeDetails);
      setImgDir(Response.RecipePath)
    }
    if (id) getINFO()
  }, [id])

  const handleGoBack = () => navigate(-1)

  const steps = recipeDetails.RecipeInstructions || []
  const items = recipeDetails.RecipeIngredients || []

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-50 px-4 py-10">
      <div className=" flex flex-row  w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-200 transition-transform hover:scale-[1.01]">
        {imgDir && (
          <img
            src={imgDir}
            alt={recipeDetails.RecipeName}
            className="w-[30%] h-[30%] object-cover rounded-t-2xl"
          />
        )}

        <div className="p-8">
          <h1 className="text-6xl font-detailed-recipe text-center text-black mb-4">
            {recipeDetails.RecipeName}
          </h1>

          <div className="flex flex-col justify-center font-Login-text text-gray-700 mb-6">
            <p className="flex items-center gap-2">
              <FaUser className="text-red-500" />Recipe By: {recipeDetails.RecipeAuthor}
            </p>
            <p className="flex items-center gap-2">
              <FaClock className="text-red-500" />Recipe Duration: {recipeDetails.RecipeDuration} min
            </p>
            <p className="flex items-center gap-2">
              <FaStar className="text-red-500" />Recipe Rating: {recipeDetails.RecipeRating}
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-700 italic mb-6 leading-relaxed">
            <FaBook className="text-red-500 flex-shrink-0" />
            <span className="text-gray-800">About the Recipe:</span>
            <span className="text-gray-700">{recipeDetails.RecipeDescription}</span>
          </div>


          <div className="mt-6">
            <h2 className="text-2xl font-detailed-recipe flex items-center gap-2 text-black mb-2">
              <FaUtensils /> Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-detailed-recipe flex items-center gap-2 text-black mb-2">
              <FaListUl /> Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-800">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={handleGoBack}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-8 rounded-full transition-all shadow-md"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedRecipe

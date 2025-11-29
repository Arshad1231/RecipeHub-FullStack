import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetSingleRecipe } from '../../Services/RecipeCRUD'
import { FaUser, FaClock, FaStar, FaListUl, FaUtensils, FaBook, FaArrowLeft, FaUserCircle } from 'react-icons/fa'

const DetailedRecipe = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [imgDir, setImgDir] = useState(null)
  const [recipeDetails, setRecipeDetails] = useState({})

  useEffect(() => {
    const getINFO = async () => {
      const Response = await GetSingleRecipe(id)
      setRecipeDetails(Response.RecipeDetails)
      setImgDir(Response.RecipePath)
    }
    if (id) getINFO()
  }, [id])

  const handleGoBack = () => navigate(-1)
  const handleGoToProfile = () => navigate('/profile') // <-- Adjust route to your profile page

  const steps = recipeDetails.RecipeInstructions || []
  const items = recipeDetails.RecipeIngredients || []

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-50 px-6 py-10">
      <div className="flex flex-row w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-200">

        {/* Left image section */}
        {imgDir && (
          <div className="flex-shrink-0 w-[350px] h-auto">
            <img
              src={imgDir}
              alt={recipeDetails.RecipeName}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Right content section */}
        <div className="flex flex-col justify-between flex-grow p-8">
          <div>
            <h1 className="text-5xl font-detailed-recipe text-center text-black mb-6">
              {recipeDetails.RecipeName}
            </h1>

            <div className="flex flex-col justify-center font-Login-text text-gray-700 mb-6 space-y-2">
              <p className="flex items-center gap-2">
                <FaUser className="text-red-500" /> Recipe By: {recipeDetails.RecipeAuthor}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-red-500" /> Duration: {recipeDetails.RecipeDuration} min
              </p>
              <p className="flex items-center gap-2">
                <FaStar className="text-red-500" /> Rating: {recipeDetails.RecipeRating}
              </p>
            </div>

            <div className="flex items-start gap-2 text-gray-700 italic mb-6 leading-relaxed">
              <FaBook className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <span className="text-gray-800 font-semibold">About the Recipe:</span>{' '}
                <span className="text-gray-700">{recipeDetails.RecipeDescription}</span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-detailed-recipe flex items-center gap-2 text-black mb-2">
                <FaUtensils /> Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-detailed-recipe flex items-center gap-2 text-black mb-2">
                <FaListUl /> Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-gray-800">
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Button bar */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={handleGoBack}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md"
            >
              <FaArrowLeft /> Go Back
            </button>
            <button
              onClick={handleGoToProfile}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md"
            >
              <FaUserCircle /> Go to Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedRecipe

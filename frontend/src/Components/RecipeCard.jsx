import React from 'react'
import { FaUser, FaClock, FaStar, FaUtensils } from 'react-icons/fa'
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const RecipeCard = ({ EachRecipe }) => {
  const imagePath = EachRecipe.RecipeImg
    ? `http://localhost:3030/recipesImages/${EachRecipe.RecipeImg}`
    : "https://via.placeholder.com/100x100?text=No+Image"

  return (
    <div className="bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] border border-[#E6D3C6] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex overflow-hidden max-w-4xl mx-auto my-4">
      <div className="flex flex-col items-center flex-shrink-0 w-32 m-4 gap-3">
        <div className="w-32 h-32 rounded-lg overflow-hidden bg-[#FDF6ED]">
          <img
            src={imagePath}
            alt={EachRecipe.RecipeName}
            className="w-full h-full object-cover"
          />
        </div>
        <Link
          to={`/details/${EachRecipe._id}`}
          className="inline-block bg-red-400 hover:bg-amber-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md text-center"
        >
          See Details
        </Link>
      </div>

      <div className="flex flex-col justify-start p-4 flex-1">
        <h2 className="text-4xl  text-[#3E2723] mb-2 font-submitted-recipes flex items-center gap-2">
          <FaUtensils className="text-[#F6A700]" />
          {EachRecipe.RecipeName}
        </h2>

        <div className="text-[#7C5E48]  font-HomePage-text text-sm space-y-1 mb-2">
          <div className="flex items-center gap-2">
            <FaUser size={14} /> <span>by {EachRecipe.RecipeAuthor}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoFastFoodSharp size={14} /> <span>Type {EachRecipe.RecipeType}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock size={14} /> <span>{EachRecipe.RecipeDuration} min</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar size={14} className="text-[#F6A700]" /> <span>{EachRecipe.RecipeRating}/5</span>
          </div>
        </div>

        <p className="text-[#5D4037] text-sm line-clamp-3 font-Text-Nav">
          {EachRecipe.RecipeDescription || "No description available."}
        </p>
      </div>
    </div>
  )
}

export default RecipeCard

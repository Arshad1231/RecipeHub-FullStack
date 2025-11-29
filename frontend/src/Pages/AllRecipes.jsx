import React, { useState, useEffect } from 'react'
import { GetRecipe } from '../../Services/RecipeCRUD'
import RecipeCard from '../Components/RecipeCard'
import ProfileCard from '../Components/ProfileCard'
import FilterComponent from '../Components/FilterComponent'
import ProfileCardRecipeSection from '../Components/ProfileCardRecipeSection'
import { getUserDetails } from '../../Services/UserCRUD'

const AllRecipes = () => {
  const [allRecipes, setAllRecipes] = useState([])
  const [filteredRecipe, setFilteredRecipe] = useState([])
  const [user,setUser] = useState({})


  useEffect(() => {
    const fetchAllRecipes = async () => {
      const Data = await GetRecipe()
      const user = await getUserDetails()
      console.log(user)
      setUser(user.UserDetails)
      setAllRecipes(Data.Recipes)
      setFilteredRecipe(Data.Recipes)
    }
    fetchAllRecipes()
  }, [])

  return (
    <div className="min-h-screen bg-[#F8FAF6] py-8 px-6">
      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="md:w-1/4 w-full">
          <div className=" top-8">
            <ProfileCard />
            <ProfileCardRecipeSection ProfileDetails={user}/>
          </div>
        </div>
        <div className="flex-1">
            <div className="w-full sm:w-auto">
              <FilterComponent
                allRecipes={allRecipes}
                setAllRecipes={setAllRecipes}
                filteredRecipe={filteredRecipe}
                setFilteredRecipe={setFilteredRecipe}
              />
            </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h1 className="text-4xl sm:text-5xl w-full font-submitted-recipes bg-amber-400 text-white py-2 px-6 rounded-2xl shadow-md text-center">
              Look At These!
            </h1>
          </div>
          <ul className="flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {filteredRecipe.length > 0 ? (
              filteredRecipe.map((eachRecipe, index) => (
                <li key={index}>
                  <RecipeCard EachRecipe={eachRecipe} />
                </li>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-lg italic">
                No recipes found...
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllRecipes

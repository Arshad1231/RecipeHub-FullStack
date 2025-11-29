  import React, { useEffect } from 'react'
  import { GetUserRecipes } from '../../Services/RecipeCRUD'
  import { Link } from 'react-router-dom'
  import { DeleteRecipe } from '../../Services/RecipeCRUD'

  const RecipeSection = ({ProfileDetails}) => {
    const [Recipes, setRecipes] = React.useState([])

    const HandleDelete= async (EachRecipe)=>{
      const response = await DeleteRecipe(EachRecipe._id);
      if(response.success){
        alert("Recipe Deleted Successfully");
        setRecipes(Recipes.filter(recipe => recipe._id !== EachRecipe._id));
      }
    }
    useEffect(()=>{
      const Details = async()=>{
        const ForRecipes = await GetUserRecipes()
        setRecipes(ForRecipes.Recipes)
      }
      Details();
    },[Recipes])
    const UserRecipes = React.useMemo(() => {
      if (!ProfileDetails || !ProfileDetails._id) return [];
      return Recipes.filter(recipe => recipe.userID === ProfileDetails._id);
    }, [Recipes, ProfileDetails]);

    return (
      <div >
        <h1 className='text-center bg-amber-500 font-submitted-recipes text-4xl mt-5 text-white rounded-xl p-1'>Submitted Recipes!</h1>
        {UserRecipes.map((EachRecipe,index)=>(
          <div className='flex flex-col justify-between mt-3 shadow-lg p-6 rounded-xl' key={index}>
            <div className='flex flex-col'>
              <h1 className='font-Login-text text-4xl font-bold'>{EachRecipe.RecipeName}</h1>
              <p className='font-Login-text'><span>Description: </span>{EachRecipe.RecipeDescription}</p>
              <p className='font-Login-text'><span>Duration: </span>{EachRecipe.RecipeDuration}</p>
              <p className='font-Login-text'><span>Recipe Type: </span>{EachRecipe.RecipeType}</p>
            </div>
            <div className='flex flex-row mt-2 font-submitted-recipes gap-5'>
              <button type="button" className="font-submitted-recipes bg-red-500 rounded-3xl p-1 w-30 h-12 flex items-center justify-center mt-2 text-white hover:bg-blue-500">
                <Link to={`/details/${EachRecipe._id}`}>Get Details</Link>
              </button>
              <button type="button" className="font-submitted-recipes bg-red-500 rounded-3xl p-1 w-30 h-12 flex items-center justify-center mt-2 text-white hover:bg-blue-500">
                <Link to={`/edit/${EachRecipe._id}`}>Edit</Link>
              </button>
              <button type="button" onClick={(e)=>HandleDelete(EachRecipe)} className='font-submitted-recipes bg-red-500 rounded-3xl p-1 w-30 h-12 flex items-center justify-center mt-2 text-white hover:bg-blue-500'>Delete</button>
                
            </div>
            
          </div>
        ))}
      </div>
    )
  }

  export default RecipeSection

import React from 'react'
import { useRecipeContext } from '../Context/RecipeContext'
import { useNavigate } from 'react-router-dom'
import GroupFriends from '../Components/GroupFriends'
import Chefs from '../Components/Chefs'

const HomePage = () => {
  const { HomePageImage, HomePagePictures, status } = useRecipeContext()
  const navigate = useNavigate()
  const DisplayPics = HomePagePictures.slice(0, 4)

  const HandleRedirect = () => {
    if (!status) {
      navigate("/login")
    } else {
      navigate("/recipes")
    }
  }

  return (
    <>
      <div className=''>
          {/* ===== Hero Section ===== */}
        <div className="overflow-hidden mt-10">
          <div className="relative flex justify-center items-center w-[90%] h-[90vh] overflow-hidden m-auto rounded-3xl shadow-2xl bg-black/20">
            <img
              src={DisplayPics[1]}
              alt="recipe"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />

            <h1
              className="absolute font-Logo-Nav font-bold text-white drop-shadow-3xl
                        text-[10rem] md:text-[14rem] lg:text-[18rem]
                        top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 leading-[1] text-center drop-shadow-2xl"
            >
              Recipe Hub
            </h1>
            
          </div>
          {/* ===== Info Section ===== */}
        <div className="p-10 mt-8  text-xl flex flex-row flex-wrap gap-10 justify-center w-[80%] bg-red-300 rounded-3xl text-white border-t-4 border-red-400 shadow-2xl m-auto">
          {/* Left Text Column */}
          <div className="flex flex-col gap-2  flex-1 min-w-[300px]">
            <div>
              <h2 className="text-5xl font-Logo-Nav leading-tight text-center ">
                The world's best dishes are a click away!
              </h2>
            </div>

            <p className="mt-2 font-HomePage-text leading-snug">
              <span className="text-orange-500 font-semibold">GitHub for recipes!</span> Dive into a world of 
              <span className="text-purple-600 font-semibold"> flavors</span> and creativity. 
              Discover recipes from <span className="text-green-600 font-semibold"> passionate cooks</span> around the globe, 
              share your own <span className="text-orange-500 font-semibold"> favorites</span>, and perfect your dishes. 
              Just like coding, you can fork, remix, and customize recipes to make them truly yours. 
              Join our <span className="text-green-600 font-semibold"> vibrant community</span>, interact with recipes from across the world, 
              and bring them straight to your <span className="text-purple-600 font-semibold"> kitchen!</span>
            </p>

            <p className="text-2xl mt-3 font-Login-text underline text-purple-600">Why Join Us?</p>

            <p className="font-Login-text leading-snug">
              Join <span className="text-orange-500 font-semibold">Recipe Hub</span> and unlock a world of 
              <span className="text-purple-600 font-semibold"> culinary creativity!</span> Discover, share, and remix recipes from 
              <span className="text-green-600 font-semibold"> food lovers</span> across the globe. 
              Whether you're a beginner cook or a seasoned chef, explore 
              <span className="text-orange-500 font-semibold"> step-by-step guides</span>, 
              <span className="text-green-600 font-semibold"> cooking tips</span>, and 
              <span className="text-purple-600 font-semibold"> mouthwatering inspirations.</span> 
              Save your favorite dishes, share your most loved ones, and interact with every recipe that inspires you.  
              Create personalized collections and connect with a community that celebrates 
              <span className="text-green-600 font-semibold"> good food</span> and 
              <span className="text-orange-500 font-semibold"> great stories.</span> 
              Start your <span className="text-purple-600 font-semibold"> cooking journey</span> today — your next 
              <span className="text-orange-500 font-semibold"> delicious creation</span> awaits!
            </p>



            <button
              type="button"
              onClick={HandleRedirect}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 w-fit mt-4"
            >
              Get Started
            </button>
          </div>
        </div>
        </div>

        <br />
        <hr className='w-[95%] m-auto' />

        {/* ===== Welcome Section ===== */}
        <div className='text-center mt-10 bg-heading py-4'>
          <h1 className='text-5xl font-Login-text'>Welcome Foodie!</h1>
          <h1 className='text-5xl font-Login-text'>The world's best Recipes at your fingertips!</h1>
        </div>

        {/* ===== Image Gallery ===== */}
        <div className='flex flex-wrap gap-4 w-[90%] m-auto justify-center mt-5'>
          {HomePagePictures.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`recipe-${index}`}
              className="rounded-2xl shadow-md w-[30%] h-[30%] object-cover align-top"
            />
          ))}
        </div>

        <br />
        <hr className='w-[95%] m-auto' />

        {/* ===== Connections Section ===== */}
        <div className='mb-3'>
          <h1 className="text-6xl md:text-8xl font-Logo-Nav text-center w-full bg-gradient-to-r from-orange-200 via-amber-100 to-orange-50 text-amber-700 mt-8 py-4 rounded-xl shadow-md tracking-wide">
            Make Connections!
          </h1>
          <GroupFriends />
         
        </div>

        <br />
        <hr className='w-[95%] m-auto' />

        {/* ===== Chefs Section ===== */}
        <div>
          <Chefs />
        </div>
      </div>
     
    </>
  )
}

export default HomePage

import React from 'react'
import { useRecipeContext } from '../Context/RecipeContext'
import { useNavigate } from 'react-router-dom'
import GroupFriends from '../Components/GroupFriends'
import Chefs from '../Components/Chefs'

const HomePage = () => {
  const { HomePageImage,HomePagePictures,status } = useRecipeContext()
  const navigate = useNavigate()
  const DisplayPics = HomePagePictures.slice(0,4)

  const HandleRedirect = () => {
    if (!status){
      navigate("/login")
    }
    navigate("/recipes")
  }

  return (
    <>
      
      <div className='p-8 m-auto mt-10 flex flex-row gap-5 justify-center w-[95%] bg-red-300 rounded-4xl text-white border-red-400 border-t-5'>
        <div className='flex flex-col gap-3 mt-10 flex-2'>
          <div>
            <h1 className='text-9xl font-Logo-Nav'>Recipe Hub</h1>
            <h1 className='text-3xl font-Logo-Nav'>The worlds best dishes are a click away</h1>
          </div>
          <p className='mt-2 font-HomePage-text'>
            GitHub for recipies! Dive into a world of flavors and creativity. Discover recipes from passionate cooks around the globe, 
            share your own culinary creations, and perfect your favorites. Just like coding, you can fork, remix, 
            and customize recipes to make them truly yours. Join our community of food enthusiasts and turn every 
            meal into a masterpiece!
          </p>
          <p className=' text-2xl mt-2 font-Login-text underline'>Why To Join us?</p>
          <p className=' font-Login-text'>Join Recipe Hub and unlock a world of culinary creativity! Discover, share, and remix recipes from food lovers across the globe.</p>
          <button
            type='button'
            onClick={HandleRedirect}
            className='bg-red-800 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-200 w-[20%] '
          >
            Get Started
          </button>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-2 mt-10 flex-2'>
          {DisplayPics.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`recipe-${index}`}
              className="rounded-2xl shadow-md w-[40%] h-[40%] object-fill transform transition-transform duration-200 hover:scale-110 align-top"
            />
          ))}
        </div>
      </div>
      <br />
      <hr className='w-[95%] m-auto' />
      <div className=' text-center mt-10 bg-amber-200'>
        <h1 className='text-5xl font-Login-text'>Welcome Foodie!</h1>
        <h1 className='text-5xl font-Login-text'>The Worlds best Recipes at your finger Tips!</h1>
      </div>

      <div className='flex flex-wrap gap-4 w-[90%] m-auto justify-center mt-5'>
          {HomePagePictures.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`recipe-${index}`}
              className="rounded-2xl shadow-md w-[30%] h-[30%] object-fill  align-top"
            />
          ))}
      </div>
      <br />
      <hr className='w-[95%] m-auto' />
      <div className='mb-3'>
        <h1 className="text-6xl font-Logo-Nav text-center w-full bg-amber-200 mt-5 p-1">
        Make Connections!
        </h1>
        <div className='flex flex-col w-[85%] bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-[1.05] transition-all duration-300 m-auto mt-10 '>
          <GroupFriends/>
        </div>
      </div>
        <br />
      <hr className='w-[95%] m-auto' />
      <div>
        <Chefs/>
      </div>
    </>
  )
}

export default HomePage

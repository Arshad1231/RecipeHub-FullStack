import React from 'react'
import { useRecipeContext } from '../Context/RecipeContext'

const GroupFriends = () => {
  const { GroupFriends } = useRecipeContext()

  return (
    <>
    
      <div className="flex flex-col flex-wrap justify-center items-center gap-4 m-3 w-[95%]">
        
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-[90%] text-left">
            <h3 className='font-HomePage-text '>Come On! join recipeHub!</h3>
            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Share <span className="font-semibold text-amber-600">recipes</span>, 
              explore <span className="font-semibold text-amber-600">cultures</span>, and 
              connect with food lovers from around the globe! 🌎 <br />
              Show them what <span className="italic font-semibold">tasty food</span> looks like and 
              celebrate the joy of cooking together!
            </p>
            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Discover new ingredients, cooking techniques, and secret family recipes. 🍲 Whether you're a seasoned chef or just starting out, there's a space here for everyone to learn and grow. 
            </p>
            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Join live cooking sessions, participate in fun challenges, and exchange tips with friends who share your passion for flavor and creativity. 🍴 <br />
              Your next favorite recipe or foodie friend could be just a click away!
            </p>
            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Remember, food is more than just sustenance — it's a bridge between cultures, a way to tell stories, and a celebration of life. Let's make every meal an opportunity to connect, inspire, and savor the magic of cooking together! ✨
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={GroupFriends}
            alt="Friends sharing food"
            className="rounded-2xl  w-[70%] object-cover m-auto"
          />
        </div>
      </div>
    </>
  )
}

export default GroupFriends

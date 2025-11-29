import React from 'react'
import { useRecipeContext } from '../Context/RecipeContext'

const GroupFriends = () => {
  const { GroupFriends } = useRecipeContext()

  return (
    <>
      <div className=" m-auto flex flex-col flex-wrap w-[85%] justify-center items-center gap-6 mt-5  bg-gradient-to-b from-orange-50 via-white to-amber-50 rounded-3xl p-6 shadow-md">
        
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-[90%] text-left space-y-4">
            <h3 className="font-HomePage-text text-3xl text-amber-600 font-bold tracking-wide">
              🍽️ Come On! <span className="text-green-600">Join RecipeHub</span> and cook up some fun!
            </h3>

            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Share your <span className="text-orange-600 font-semibold">recipes 🍲</span>, 
              explore <span className="text-green-600 font-semibold">cultures 🌍</span>, and 
              connect with <span className="text-purple-600 font-semibold">food lovers ❤️</span> from around the globe! 
              <br /> Show everyone what <span className="italic text-amber-700 font-semibold">tasty food</span> looks like and 
              celebrate the joy of <span className="text-orange-600 font-semibold">cooking together 👨‍🍳</span>!
            </p>

            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Discover <span className="text-purple-600 font-semibold">new ingredients 🧂</span>, 
              <span className="text-green-600 font-semibold"> cooking techniques 🔪</span>, and 
              <span className="text-orange-600 font-semibold"> secret family recipes 🧡</span>. 
              Whether you're a <span className="italic text-green-700">seasoned chef</span> or 
              just starting out, there’s a space here for everyone to learn and grow 🌱.
            </p>

            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Join <span className="text-amber-600 font-semibold">live cooking sessions 🎥</span>, 
              participate in <span className="text-green-600 font-semibold">fun challenges 🎯</span>, 
              and share tips with friends who love food as much as you do! 🍴 
              <br /> Your next favorite <span className="text-purple-600 font-semibold">recipe</span> or 
              <span className="text-orange-600 font-semibold"> foodie friend</span> could be just a click away! 💫
            </p>

            <p className="font-HomePage-text text-lg text-gray-800 leading-relaxed">
              Remember, <span className="text-orange-600 font-bold">food</span> is more than just sustenance — 
              it’s a <span className="text-green-600 font-semibold">bridge between cultures</span>, 
              a way to <span className="text-purple-600 font-semibold">tell stories 📖</span>, 
              and a <span className="text-amber-700 font-semibold">celebration of life 🎉</span>.
              <br /> Let’s make every meal an opportunity to connect, inspire, and savor the magic of cooking together! ✨
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <img
            src={GroupFriends}
            alt="Friends sharing food"
            className="rounded-3xl w-[70%] object-cover shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </>
  )
}

export default GroupFriends

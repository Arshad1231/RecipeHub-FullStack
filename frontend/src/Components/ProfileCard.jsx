import React, { useEffect, useState } from 'react'
import { useRecipeContext } from '../Context/RecipeContext'
import { getUserDetails } from '../../Services/UserCRUD'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
  const [ProfileDetails, setProfileDetails] = useState(null)
  const { Chefs } = useRecipeContext()

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserDetails()
      setProfileDetails(data.UserDetails)
    }
    fetchUser()
  }, [])

  if (!ProfileDetails) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        Loading, please wait...
      </div>
    )
  }

  return (
    <>
    <h2 className="text-2xl font-semibold text-gray-800 font-Login-text text-center">Welcome back!</h2>
    <div className="max-w-sm mx-auto bg-white rounded-2xl p-6 flex flex-row items-center space-y-4 border border-gray-100 transition-shadow duration-300 ">
        <div className='p-3'>
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-400 shadow-md">
                <img
                src={Chefs[0]}
                alt="Profile"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
        <div>
            <h3 className="font-medium text-gray-700 font-Text-Nav text-4xl">
                {ProfileDetails.FirstName}
            </h3>

            <p className="text-gray-500 text-center font-HomePage-text">Got a recipe to share?</p>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 w-full max-w-[150px] m-2">
                <Link to="/add">Share</Link>
            </button>
        </div>
      
    </div>
</>
  )
}

export default ProfileCard

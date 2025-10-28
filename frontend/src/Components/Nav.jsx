import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeContext } from '../Context/RecipeContext'
import { LogOutUser } from '../../Services/UserCRUD'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const { status, setStatus, SiteLogo } = useRecipeContext()
  const navigate = useNavigate()

  const HandleLogout = async () => {
    setStatus(false)
    const response = await LogOutUser()
    console.log(response.message)
    navigate("/")
  }

  return (
    <div className='bg-red-500 text-white font-bold flex justify-between items-center px-5 py-2 overflow-hidden'>
     

      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <img src={SiteLogo} alt="Logo" className="w-12 h-12 object-cover" />
        <h1 className="text-4xl font-Logo-Nav transform transition-transform duration-300 hover:scale-110">
          Recipe Hub
        </h1>
      </Link>


      {!status && (
        <p className="whitespace-nowrap text-center text-sm md:text-base font-Text-Nav italic px-4 hover:underline underline-offset-4">
          "One cannot think well, love well, sleep well, if one has not dined well." – Virginia Woolf
        </p>
      )}

      <ul className='flex gap-4 items-center flex-shrink-0'>
        {status ? (
          <>
            <li className='p-1 font-Text-Nav hover:underline underline-offset-4 hover:text-black rounded-xl'>
              <Link to="/">Home Page</Link>
            </li>
            <li className='p-1 font-Text-Nav hover:underline underline-offset-4 hover:text-black rounded-xl'>
              <Link to="/add">Add Page</Link>
            </li>
            <li className='p-1 font-Text-Nav hover:underline underline-offset-4 hover:text-black rounded-xl'>
              <Link to="/recipes">All Recipes</Link>
            </li>
            <li className='p-1 font-Text-Nav hover:underline underline-offset-4 hover:text-black rounded-xl'>
              <Link to="/profile">Profile</Link>
            </li>
            <li className='p-1 font-Text-Nav hover:bg-amber-50 hover:text-black rounded-xl'>
              <button onClick={HandleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className='p-1 font-Text-Nav hover:underline underline-offset-4 hover:text-black rounded-xl'>
              <Link to="/login">Login</Link>
            </li>
            <li className='p-1 font-Text-Nav hover:underline underline-offset-4 hover:text-black rounded-xl'>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Nav

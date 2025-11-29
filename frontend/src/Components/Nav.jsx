import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeContext } from '../Context/RecipeContext'
import { LogOutUser } from '../../Services/UserCRUD'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const { status, setStatus, SiteLogo } = useRecipeContext()
  const navigate = useNavigate()

  const quote = "\"One cannot think well, love well, sleep well, if one has not dined well.\" – Virginia Woolf"
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    // Skip running when user is logged in (quote hidden)
    if (status) return

    const typingSpeed = isDeleting ? 40 : 80
    const atStart = charIndex === 0
    const atEnd = charIndex === quote.length  

    let timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextIndex = Math.min(charIndex + 1, quote.length)
        setTypedText(quote.substring(0, nextIndex))
        setCharIndex(nextIndex)
        if (nextIndex === quote.length) {
          setIsDeleting(true)
        }
      } else {
        const nextIndex = Math.max(charIndex - 1, 0)
        setTypedText(quote.substring(0, nextIndex))
        setCharIndex(nextIndex)
        if (nextIndex === 0) {
          setIsDeleting(false)
        }
      }
    }, atEnd ? 1200 : atStart ? 500 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, status])

  const HandleLogout = async () => {
    setStatus(false)
    const response = await LogOutUser()
    console.log(response.message)
    navigate("/")
  }

  return (
    <div className=' bg-red-400 text-black font-bold flex justify-between items-center px-5 py-2 overflow-hidden'>
     

      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <h1 className="text-5xl font-nav-logo transform transition-transform duration-300 hover:scale-110">
          Recipe Hub
        </h1>
      </Link>


      {!status && (
        <p className="whitespace-nowrap text-center text-sm md:text-base font-Text-Nav italic px-4 hover:underline underline-offset-4">
          {typedText}
          <span className="ml-0.5">|</span>
        </p>
      )}

      <ul className='flex gap-4 items-center flex-shrink-0'>
        {status ? (
          <>
            <li className='p-2 font-Text-Nav hover:underline underline-offset-4 hover:bg-red-500 hover:text-white rounded-xl'>
              <Link to="/">Home Page</Link>
            </li>
            <li className='p-2 font-Text-Nav hover:underline underline-offset-4 hover:bg-red-500 hover:text-white rounded-xl'>
              <Link to="/add">Add Recipe</Link>
            </li>
            <li className='p-2 font-Text-Nav hover:underline underline-offset-4 hover:bg-red-500 hover:text-white rounded-xl'>
              <Link to="/recipes">All Recipes</Link>
            </li>
            <li className='p-2 font-Text-Nav hover:underline underline-offset-4 hover:bg-red-500 hover:text-white rounded-xl'>
              <Link to="/profile">Profile</Link>
            </li>
            <li className='p-2 font-Text-Nav hover:underline underline-offset-4 hover:bg-red-500 hover:font-nav-logo hover:text-lg rounded-xl'>
              <button onClick={HandleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className='p-2 font-Text-Nav hover:underline underline-offset-4 hover:bg-red-500 hover:font-nav-logo text-2xl rounded-xl'>
              <Link to="/login">Login</Link>
            </li>
            <li className='p-2 font-Text-Nav hover:underline underline-offset-4 hover:bg-red-500 hover:font-nav-logo text-xl rounded-xl'>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Nav

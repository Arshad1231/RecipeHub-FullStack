import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AddPage from './Pages/AddPage'
import Nav from './Components/Nav'
import ErrorPage from './Pages/ErrorPage'
import AllRecipes from './Pages/AllRecipes'
import DetailedRecipe from './Pages/DetailedRecipe'
import Login from './AuthPages/Login'
import Register from './AuthPages/Register'
import Profile from './Pages/Profile'
import EditPage from './Pages/EditPage'

function App() {

  return (
    <>
      
      <Nav/>  
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add" element={<AddPage/>}/>
        <Route path="/recipes" element={<AllRecipes/>}/>
        <Route path="/details/:id" element={<DetailedRecipe/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App

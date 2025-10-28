import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const FilterComponent = ({allRecipes,setAllRecipes,filteredRecipe,setFilteredRecipe}) => {
  const [query, setQuery] = useState("")
  const [drop, setDrop] = useState(false)
  const [Type, setType]=useState(false)

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase()
    setQuery(value)
    const filtered = allRecipes.filter((eachRecipe) =>
      eachRecipe.RecipeName.toLowerCase().includes(value)
    )
    setFilteredRecipe(filtered)
  }

  const HandleDurationFilter = (range) => {
    const [min, max] = range
    const filtered = allRecipes.filter((eachRecipe) => {
      const duration = Number(eachRecipe.RecipeDuration)
      return duration >= min && (max ? duration < max : true)
    })
    setFilteredRecipe(filtered)
    setDrop(false) 
  }
  const HandleTypeFilter = (value) => {
    const filtered = allRecipes.filter((eachRecipe) => eachRecipe.RecipeType === value)
    setFilteredRecipe(filtered)
    setType(false)
}
  const HandleDropChange = () => {
    setDrop(!drop)
  }
  const HandleTypeChange = () => {
    setType(!Type)
 
  }

  const handleOption1Click = () => HandleDurationFilter([0, 6])          
  const handleOption2Click = () => HandleDurationFilter([6, 11])         
  const handleOption3Click = () => HandleDurationFilter([11, 31])        
  const handleOption4Click = () => HandleDurationFilter([31, 61])        
  const handleOption5Click = () => HandleDurationFilter([61, Infinity])  


  const HandleType1 =()=> HandleTypeFilter("BreakFast")
  const HandleType2 =()=> HandleTypeFilter("Lunch")
  const HandleType3 =()=> HandleTypeFilter("Dinner")
  const HandleType4 =()=> HandleTypeFilter("Snack")
  const HandleType5 =()=> HandleTypeFilter("Dessert")

  const handleShowAllClick = () => {
    setFilteredRecipe(allRecipes)
    setDrop(false)
  }
  return (
    <div>
        <div className='flex flex-row m-3'>
            <div className="relative w-1/2">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                type="text"
                placeholder="Search recipes..."
                value={query}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border-2 border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all shadow-sm"
                />
            </div>

            <div className="relative ml-4">
                <button
                    type="button"
                    onClick={HandleDropChange}
                    className="bg-amber-300 text-white px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-amber-400 transition"
                    >
                    Duration ▼
                </button>

                {drop && (
                    <div className="absolute mt-2 right-0 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleShowAllClick}>
                        Show All
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleOption1Click}>
                        About 5 min
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleOption2Click}>
                        5–10 min
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleOption3Click}>
                        10–30 min
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleOption4Click}>
                        30–60 min
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleOption5Click}>
                        More than 60 min
                        </button>
                </div>
                )}
            </div>
            <div className='relative ml-4'>
                <button
                    type="button"
                    onClick={HandleTypeChange}
                    className=" relative bg-amber-300 text-white px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-amber-400 transition"
                    >
                    Type ▼
                </button>
                {Type && (
                    <div className="absolute mt-2 right-[-10] w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleShowAllClick}>
                        Show All
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={HandleType1}>
                        BreakFast
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={HandleType2}>
                        Lunch
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={HandleType3}>
                        Dinner
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={HandleType4}>
                        Snack
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={HandleType5}>
                        Dessert
                        </button>
                </div>
                )}
            </div>
        </div>
    </div>

  )
}

export default FilterComponent

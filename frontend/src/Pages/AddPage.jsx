import React, { useEffect, useState } from 'react'
import { FaUser, FaUtensils, FaRegClock, FaStar, FaListUl, FaPlus, FaAlignLeft } from 'react-icons/fa'
import { getUserDetails } from '../../Services/UserCRUD'
import RecipeSection from '../Components/RecipeSection'
import { PostRecipe } from '../../Services/RecipeCRUD'


const inputClass =
  'mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 transition'
const labelClass = 'block text-lg font-medium text-white mb-1 flex items-center gap-2'

const AddPage = () => {
  const [ProfileDetails, setProfileDetails] = useState(null)
  const [userID, setUserID] = useState(null)

  useEffect(() => {
    const getDetails = async () => {
      const data = await getUserDetails()
      setUserID(data.UserDetails._id)
      setProfileDetails(data.UserDetails)
    }
    getDetails()
  }, [])

  const [RecipeName, setRecipeName] = useState('')
  const [RecipeAuthor, setRecipeAuthor] = useState('')
  const [RecipeDescription, setRecipeDescription] = useState('')
  const [RecipeDuration, setRecipeDuration] = useState('')
  const [RecipeRating, setRecipeRating] = useState('')
  const [RecipeType, setRecipeType] = useState('')
  const [RecipeInstructions, setRecipeInstruction] = useState([])
  const [Line, setLine] = useState('')
  const [RecipeImg, setRecipeImage] = useState(null)

  const [RecipeIngredients, setRecipeIngredients] = useState([])
  const [RecipeIngredients_item, setRecipeIngredients_item] = useState('')

  const HandleInstructionSubmit = (e) => {
    e.preventDefault()
    if (Line.trim()) {
      setRecipeInstruction([...RecipeInstructions, Line])
      setLine('')
    }
  }

  const HandleRecipeIngredients = (e) => {
    e.preventDefault()
    if (RecipeIngredients_item.trim()) {
      setRecipeIngredients([...RecipeIngredients, RecipeIngredients_item])
      setRecipeIngredients_item('')
    }
  }

  const HandleRecipeAdd = async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('RecipeImg');
  const file = fileInput.files[0]; 

  if (!file) {
    alert("Please select a file!");
    return;
  }

  const formData = new FormData();
  formData.append('RecipeImg', file);
  formData.append('RecipeName', RecipeName);
  formData.append('RecipeAuthor', RecipeAuthor);
  formData.append('RecipeDescription', RecipeDescription);
  formData.append('RecipeDuration', RecipeDuration);
  formData.append('RecipeRating', RecipeRating);
  formData.append('RecipeType', RecipeType);
  formData.append('userID', userID);
  formData.append('RecipeIngredients', JSON.stringify(RecipeIngredients));
  formData.append('RecipeInstructions', JSON.stringify(RecipeInstructions));

  console.log("FormData entries:");
  for (let pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  }

  try {
    const response = await PostRecipe(formData);
    console.log("Server response:", response);
  } catch (err) {
    console.log("Error posting recipe:", err);
  }

    
    // Reset form
    setRecipeName('')
    setRecipeAuthor('')
    setRecipeDescription('')
    setRecipeRating('')
    setRecipeDuration('')
    setRecipeInstruction([])
    setRecipeIngredients([])
    setRecipeImage(null)

  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-[#F0F5F0] min-h-screen">
      <div className="lg:w-1/3 flex-shrink-0">
        <RecipeSection ProfileDetails={ProfileDetails} />
      </div>

      <div className="lg:w-2/3 w-full bg-red-300 p-8 rounded-3xl shadow-lg overflow-auto">
        <h1 className="text-4xl font-semibold text-center underline italic mb-8 text-white flex items-center justify-center gap-3">
          <FaUtensils className="inline mb-1" /> Add a Recipe
        </h1>

        <form onSubmit={HandleRecipeAdd} className="space-y-6" encType="multipart/form-data">
          <input type="hidden" name="userID" value={userID} />

          <div>
            <label htmlFor="RecipeName" className={labelClass}>
              <FaUtensils /> Recipe Name
            </label>
            <input
              type="text"
              name="RecipeName"
              id="RecipeName"
              className={inputClass}
              value={RecipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="e.g. Chocolate Cake"
              required
            />
          </div>

          <div>
            <label htmlFor="RecipeAuthor" className={labelClass}>
              <FaUser /> Recipe Author
            </label>
            <input
              type="text"
              name="RecipeAuthor"
              id="RecipeAuthor"
              className={inputClass}
              value={RecipeAuthor}
              onChange={(e) => setRecipeAuthor(e.target.value)}
              placeholder="e.g. John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="RecipeDescription" className={labelClass}>
              <FaAlignLeft /> Recipe Description
            </label>
            <textarea
              name="RecipeDescription"
              id="RecipeDescription"
              rows="4"
              className={inputClass}
              value={RecipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
              placeholder="Describe your recipe..."
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="RecipeDuration" className={labelClass}>
                <FaRegClock /> Duration (min)
              </label>
              <input
                type="number"
                name="RecipeDuration"
                id="RecipeDuration"
                className={inputClass}
                value={RecipeDuration}
                onChange={(e) => setRecipeDuration(e.target.value)}
                min="1"
                required
              />
            </div>
            <div>
              <label htmlFor="RecipeRating" className={labelClass}>
                <FaStar /> Rating
              </label>
              <input
                type="number"
                name="RecipeRating"
                id="RecipeRating"
                className={inputClass}
                value={RecipeRating}
                onChange={(e) => setRecipeRating(e.target.value)}
                min="1"
                max="5"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="RecipeImg" className={labelClass}>
               Upload Recipe Image
            </label>
            <input
              type="file"
              name="RecipeImg"
              id="RecipeImg"
              accept="image/*"
              onChange={(e) => setRecipeImage(e.target.files[0])}
              className="block w-full text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="RecipeType" className={labelClass}>
              <FaListUl /> Recipe Type
            </label>
            <select
              id="RecipeType"
              name="RecipeType"
              value={RecipeType}
              onChange={(e) => setRecipeType(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition font-medium text-gray-700"
            >
              <option value="">Select Type</option>
              <option value="BreakFast">🥐 BreakFast</option>
              <option value="Lunch">🥗 Lunch</option>
              <option value="Dinner">🍛 Dinner</option>
              <option value="Snack">🍪 Snack</option>
              <option value="Dessert">🍰 Dessert</option>
            </select>
          </div>
          <div>
            <label htmlFor="RecipeLine" className={labelClass}>
              <FaListUl /> Instructions
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="RecipeLine"
                id="RecipeLine"
                className={inputClass + ' flex-1'}
                value={Line}
                onChange={(e) => setLine(e.target.value)}
                placeholder="Add a step"
              />
              <button
                onClick={HandleInstructionSubmit}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-md shadow flex items-center gap-2"
              >
                <FaPlus /> Add
              </button>
            </div>
            <ul className="list-decimal list-inside mt-2 text-green-800">
              {RecipeInstructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
          <div>
            <label htmlFor="RecipeIngredients_item" className={labelClass}>
              <FaListUl /> Ingredients
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="RecipeIngredients_item"
                id="RecipeIngredients_item"
                className={inputClass + ' flex-1'}
                value={RecipeIngredients_item}
                onChange={(e) => setRecipeIngredients_item(e.target.value)}
                placeholder="Add an ingredient"
              />
              <button
                onClick={HandleRecipeIngredients}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-md shadow flex items-center gap-2"
              >
                <FaPlus /> Add
              </button>
            </div>
            <ul className="list-disc list-inside mt-2 text-green-800">
              {RecipeIngredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg text-lg transition flex items-center justify-center gap-2"
          >
            <FaPlus /> Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPage

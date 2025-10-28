import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetSingleRecipe,UpdateRecipe } from "../../Services/RecipeCRUD";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    RecipeName: "",
    RecipeAuthor: "",
    RecipeIngredients: "",
    RecipeDescription: "",
    RecipeDuration: "",
    RecipeRating: "",
    RecipeInstructions: "",
    RecipeType: "",
  });
  const [newImage, setNewImage] = useState(null);

  // Fetch existing recipe data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetSingleRecipe(id);
        if (response && response.RecipeDetails) {
          setRecipeData(response.RecipeDetails);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchData();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image selection
  const handleFileChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  // Handle form submission using FormData
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in recipeData) {
      formData.append(key, recipeData[key]);
    }

    if (newImage) {
      formData.append("RecipeImg", newImage);
    }

    try {
      const res = await UpdateRecipe(id, formData);
      console.log("Update response:", res);
      alert("Recipe updated successfully!");
      navigate(`/details/${id}`);
    } catch (error) {
      console.error("Error updating recipe:", error);
      alert("Failed to update recipe.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-700">
        Edit Recipe
      </h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-600">Recipe Name</label>
          <input
            type="text"
            name="RecipeName"
            value={recipeData.RecipeName}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Author</label>
          <input
            type="text"
            name="RecipeAuthor"
            value={recipeData.RecipeAuthor}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Ingredients</label>
          <textarea
            name="RecipeIngredients"
            value={recipeData.RecipeIngredients}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            rows={3}
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Description</label>
          <textarea
            name="RecipeDescription"
            value={recipeData.RecipeDescription}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            rows={3}
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Duration (mins)</label>
          <input
            type="number"
            name="RecipeDuration"
            value={recipeData.RecipeDuration}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Rating</label>
          <input
            type="number"
            name="RecipeRating"
            value={recipeData.RecipeRating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Instructions</label>
          <textarea
            name="RecipeInstructions"
            value={recipeData.RecipeInstructions}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            rows={4}
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600">Type</label>
          <input
            type="text"
            name="RecipeType"
            value={recipeData.RecipeType}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Image Upload Section */}
        <div>
          <label className="block font-semibold text-gray-600">Change Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-lg"
          />
          {recipeData.RecipeImg && (
            <img
              src={`http://localhost:3030/recipesImages/${recipeData.RecipeImg}`}
              alt="Recipe"
              className="w-32 h-32 object-cover rounded-lg mt-2"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPage;

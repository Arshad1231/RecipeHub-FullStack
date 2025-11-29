import React from 'react'
import { useRecipeContext } from '../Context/RecipeContext'

const Chefs = () => {
  const { Chefs } = useRecipeContext()

  const chefData = [
    {
      name: "Chef Domic",
      specialty: "Italian Cuisine",
      description: "Master of pasta and sauces, bringing authentic Italian flavors to your plate.",
      img: Chefs[0],
      experience: "12 years of culinary experience in top Italian restaurants.",
      awards: ["Best Italian Chef 2021", "Michelin Star 2020"],
      signatureDishes: ["Spaghetti Carbonara", "Risotto ai Funghi", "Tiramisu"]
    },
    {
      name: "Chef David",
      specialty: "French Pastry",
      description: "Expert in delicate pastries and desserts, creating sweet works of art.",
      img: Chefs[1],
      experience: "10 years in French patisseries and dessert competitions.",
      awards: ["World Pastry Cup 2022", "Best Pastry Chef 2020"],
      signatureDishes: ["Croissant", "Macarons", "Crème Brûlée"]
    },
    {
      name: "Chef Ayesha",
      specialty: "Indian Spices",
      description: "Passionate about bold flavors and traditional Indian cooking techniques.",
      img: Chefs[2],
      experience: "15 years of experience in traditional and fusion Indian cuisine.",
      awards: ["Best Indian Chef 2021", "Spice Master Award 2019"],
      signatureDishes: ["Butter Chicken", "Paneer Tikka", "Biryani"]
    }
  ]

  return (
    <>
      <h1 className="text-6xl md:text-8xl font-Logo-Nav text-center mb-10 mt-8 bg-gradient-to-r from-orange-200 via-amber-100 to-orange-50 text-amber-700 py-4 rounded-xl shadow-md">
        Some Of Our <span className="text-green-700">Best Chefs!</span> 
      </h1>

      <div className="flex flex-col items-center gap-10 my-10 w-[95%] mx-auto">
        {chefData.map((chef, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-start gap-8 bg-gradient-to-br from-orange-50 via-white to-amber-100 shadow-xl rounded-3xl p-8 w-[90%] hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          >
            <img 
              src={chef.img} 
              alt={chef.name} 
              className="w-full md:w-[40%] h-auto rounded-2xl object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />

            <div className="text-left font-HomePage-text w-full md:w-[60%] space-y-2">
              <h2 className="text-5xl md:text-6xl font-Logo-Nav text-amber-700 text-center mb-1">
                {chef.name} ✨
              </h2>
              <h3 className="text-xl text-green-700 mb-3 font-Text-Nav text-center italic">
                {chef.specialty} 🍝
              </h3>

              <p className="text-gray-700 mb-3 text-xl leading-relaxed">
                {chef.description}
              </p>

              <p className="text-gray-700 mb-1 text-lg">
                <span className="text-orange-600 font-semibold">Experience:</span> {chef.experience}
              </p>

              <p className="text-gray-700 mb-1 text-lg">
                <span className="text-purple-600 font-semibold">Awards:</span> {chef.awards.join(", ")}
              </p>

              <p className="text-gray-700 text-lg">
                <span className="text-green-700 font-semibold">Signature Dishes:</span> {chef.signatureDishes.join(", ")}
              </p>

              <p className="text-gray-800 text-lg mt-4 italic">
                🧑‍🍳 <span className="text-orange-600 font-semibold">"{chef.name}"</span> believes that cooking is an art — a blend of 
                <span className="text-green-700 font-semibold"> passion</span>, 
                <span className="text-purple-600 font-semibold"> creativity</span>, and 
                <span className="text-orange-600 font-semibold"> heart ❤️</span>.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Chefs

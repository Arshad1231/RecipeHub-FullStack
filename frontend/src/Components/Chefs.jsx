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
  
    <h1 className="text-8xl font-Logo-Nav text-center mb-8 mt-6 bg-amber-400 ">Some Of Our Best Chefs!</h1>
    <div className="flex flex-col items-center gap-10 my-10 w-[95%] mx-auto">

      {chefData.map((chef, index) => (
        <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-white shadow-lg rounded-xl p-6 w-[90%]">
          <img 
            src={chef.img} 
            alt={chef.name} 
            className="w-[40%] h-auto rounded-xl object-cover"
          />
          <div className="text-left font-HomePage-text">
            <h2 className="text-6xl font-Logo-Nav text-center">{chef.name}</h2>
            <h3 className="text-lg text-amber-600 mb-2 font-Text-Nav text-center">{chef.specialty}</h3>
            <p className="text-gray-700 mb-2 text-2xl">{chef.description}</p>
            <p className="text-gray-600 mb-1 text-xl"><span className="font-semibold">Experience:</span> {chef.experience}</p>
            <p className="text-gray-600 mb-1 text-xl">
              <span className="font-semibold">Awards:</span> {chef.awards.join(", ")}
            </p>
            <p className="text-gray-600 text-xl">
              <span className="font-semibold">Signature Dishes:</span> {chef.signatureDishes.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Chefs

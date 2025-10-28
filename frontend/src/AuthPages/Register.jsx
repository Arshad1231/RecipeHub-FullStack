import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserCRUD";
import { FaUser, FaEnvelope, FaLock, FaVenusMars, FaCalendarAlt, FaGlobe, FaBriefcase, FaPen } from "react-icons/fa";
import { useRecipeContext } from "../Context/RecipeContext";

const Register = () => {
  const navigate = useNavigate();
  const { HomePagePictures } = useRecipeContext();

  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Gender: "",
    DOB: "",
    Occupation: "",
    Country: "",
    Description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(form);
    console.log("Response from server:", response.message);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-15">
      <div className="flex flex-col md:flex-row 
                      w-[100%] md:w-[85%] lg:w-[75%] 
                      bg-white rounded-2xl shadow-2xl 
                      overflow-hidden transform scale-[1.05] 
                      transition-all duration-300">
        
        <img
          src={HomePagePictures[2]}
          alt="Register visual"
          className="w-full md:w-1/2 object-cover"
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-full md:w-1/2 p-10 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-3 font-Logo-Nav">
            Register With Email
          </h2>
          <p className="text-sm text-center mb-6 text-gray-600 font-Login-text">
            One Step Away from Unlocking Tasty Food!
          </p>

          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="FirstName"
              placeholder="First Name"
              value={form.FirstName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="LastName"
              placeholder="Last Name"
              value={form.LastName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={form.Email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={form.Password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaVenusMars className="absolute left-3 top-3 text-gray-500" />
            <select
              name="Gender"
              value={form.Gender}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="relative mb-4">
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-500" />
            <input
              type="date"
              name="DOB"
              value={form.DOB}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaBriefcase className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="Occupation"
              placeholder="Occupation"
              value={form.Occupation}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaGlobe className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="Country"
              placeholder="Country"
              value={form.Country}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-6">
            <FaPen className="absolute left-3 top-3 text-gray-500" />
            <textarea
              name="Description"
              placeholder="Tell us something about yourself..."
              value={form.Description}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-red-600 transition font-semibold"
          >
            Register
          </button>

          <p className="text-center text-gray-500 mt-4 italic text-sm">
            "Cooking is love made visible."
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { CheckLogin } from "../../Services/UserCRUD";
import { useNavigate } from "react-router-dom";
import { useRecipeContext } from "../Context/RecipeContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { setStatus, HomePagePictures } = useRecipeContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const HandleLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await CheckLogin(email, password);
    if (res.Data) {
      setMsg(res.message);
      setStatus(true);
      navigate("/");
    } else {
      setMsg(res.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row w-[95%] md:w-[75%] lg:w-[65%] bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-[1.05] transition-all duration-300">
        <img
          src={HomePagePictures[0]}
          alt="Login visual"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="flex flex-col justify-center w-full md:w-1/2 p-10 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-3 font-Logo-Nav">
            Login Into Recipe Hub
          </h2>
          <p className="text-sm text-left mb-2 text-gray-600 font-Login-text">
            Login to start discovering delicious recipes from around the globe
          </p>
          <p className="text-sm mb-2 text-gray-600 font-Login-text text-left">
            Enter Your email password
          </p>
          <p className="text-center text-red-500 mb-4">{msg}</p>

          <form onSubmit={HandleLoginSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600  text-white rounded-lg hover:bg-blue-500 transition font-semibold text-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-700 italic text-lg max-w-xl px-4">
        "Let food be thy medicine and medicine be thy food." - Hippocrates
      </p>
    </div>
  );
};

export default Login;

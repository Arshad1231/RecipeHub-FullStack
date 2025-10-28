import React, { useEffect } from 'react';
import { useRecipeContext } from '../Context/RecipeContext';
import { getUserDetails } from '../../Services/UserCRUD';
import { useNavigate } from 'react-router-dom';
import { GetUserRecipes } from '../../Services/RecipeCRUD';
import RecipeSection from '../Components/RecipeSection';

const Profile = () => {
  const navigate = useNavigate();
  const { Chefs } = useRecipeContext();
  const [ProfileDetails, setProfileDetails] = React.useState(null);

  useEffect(() => {
    const GetItems = async () => {
      const ForUser = await getUserDetails();
      if (!ForUser.UserDetails) {
        navigate('/'); 
        return;
      }
      setProfileDetails(ForUser.UserDetails);
      
    }
    GetItems();
  }, []);

  if (!ProfileDetails ) {
    return <p className="text-center mt-10 text-lg text-gray-700">Loading profile...</p>;
  }

  return (
    <>

    <h1 className='text-center  m-auto mt-10 text-6xl font-submitted-recipes bg-amber-500 text-white rounded-xl p-1 max-w-3xl'>Profile Details</h1>
    <div className="flex justify-center mt-3">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-6 flex flex-col md:flex-row gap-6">
        
        
        <div className="flex flex-col items-center md:w-1/3">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-red-300">
            <img src={Chefs[0]} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <p className="mt-4 text-gray-600">DOB: {ProfileDetails.DOB || 'N/A'}</p>
          <p className="text-gray-600">Occupation: {ProfileDetails.Occupation || 'N/A'}</p>
        </div>
        <div className="md:w-2/3 flex flex-col justify-center">
          <h1 className='text-left  m-auto  text-4xl font-submitted-recipes bg-amber-500 text-white rounded-xl p-2 max-w-3xl'>User Details</h1>
          <h2 className="text-3xl font-bold text-gray-800 font-Logo-Nav ">
            {ProfileDetails.FirstName} {ProfileDetails.LastName}
          </h2>
          <p className="text-gray-500 mt-2">Gender: {ProfileDetails.Gender}</p>
          <p className="text-gray-500 mt-1">Email: {ProfileDetails.Email}</p>
          <p className="text-gray-500 mt-1">Country: {ProfileDetails.Country || 'N/A'}</p>
          <p className="text-gray-500 mt-1">Description: {ProfileDetails.Description || 'N/A'}</p>
          
          <RecipeSection ProfileDetails={ProfileDetails}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;

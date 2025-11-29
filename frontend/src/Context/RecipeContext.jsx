import { createContext, useContext, useEffect } from "react";

const RecipeContext = createContext();

import Img1 from '../assets/Foodassests/1.jpg'
import Img2 from '../assets/Foodassests/2.jpg'
import Img3 from '../assets/Foodassests/3.jpg'
import Img4 from '../assets/Foodassests/4.jpg'
import Img5 from '../assets/Foodassests/5.jpg'
import Img6 from '../assets/Foodassests/6.jpg'
import Img7 from '../assets/Foodassests/7.jpg'
import Img8 from '../assets/Foodassests/8.jpg'
import Img9 from '../assets/Foodassests/9.jpg'


import Chef1 from "../assets/pplAssests/chef 1.jpg"
import Chef2 from "../assets/pplAssests/chef 2.jpg"
import Chef3 from "../assets/pplAssests/chef 3.jpg"

import GroupPicture from "../assets/pplAssests/GroupPic.jpg"

import eatingImage from '../assets/boys-friendship-cartoon.jpg'
import React from "react";
import {verifyLogin} from '../../Services/UserCRUD'

export const RecipeAssestProvider=({children})=>{
    const [status,setStatus]=React.useState(null)

    useEffect(() => {
        const checkLogin = async()=>{
            const data =  await verifyLogin();
            if (data) setStatus(data.isLoggedIn);
        }
        checkLogin();
  }, []);

    const HomePagePictures = [Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9]
    const HomePageImage = eatingImage
    const Chefs = [Chef1,Chef2,Chef3]
    const GroupFriends = GroupPicture
    return(
        <RecipeContext.Provider value={{HomePagePictures,HomePageImage,status,setStatus,Chefs,GroupFriends}}>
            {children}
        </RecipeContext.Provider>
    )
}

//custom Hook for Easy Access 
export const useRecipeContext=()=>useContext(RecipeContext)
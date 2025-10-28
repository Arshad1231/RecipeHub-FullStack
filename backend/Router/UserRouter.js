const express = require('express');
const UserRouter = express.Router();
const UserController = require('../Controller/UserController');

UserRouter.post("/register", UserController.RegisterUser); //Register User
UserRouter.post("/login", UserController.CheckLoginUser); //Login User
UserRouter.post("/logout", UserController.LogOutUser); //Logout User
UserRouter.get("/CheckAuth", UserController.CheckAuth); //Check Authentication
UserRouter.get("/GetUser", UserController.GetUser); //Get User Details


module.exports = UserRouter;
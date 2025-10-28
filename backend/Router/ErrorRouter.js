const express = require("express")
const ErrorRouter = express.Router()

const ErrorController = require("../Controller/Error")
ErrorRouter.use(ErrorController.wrongPath)

module.exports = ErrorRouter
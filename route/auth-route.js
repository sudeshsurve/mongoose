
const auth_router = require('express').Router()
const {signup , login} = require("../controller/auth")

auth_router.post('/sign-up' , signup )
auth_router .post('/login' , login)

module.exports = auth_router
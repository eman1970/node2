/* const express = require('express') */
import express, { response } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import middlewares from './src/middlewares/Middlewares.js'
import Configurations from './src/configurations/Configurations.js'
import UserRoutes from './src/routes/User.route.js'

dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (request, response) => {
    response.send('Hello World!')
})

app.get('/auth', isAuthenticated, (request, response) => {
})

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)


function isAuthenticated(request, response, next) {
    request.query.admin === 'true'
        ? response.send('You are admin!')
        : response.send('You cannot make calls to this API URL!')
    next()
}

Configurations.connectToDatabase()
Configurations.connectToPort(app)




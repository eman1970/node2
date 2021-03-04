/* const express = require('express') */
import express, { response } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config()
const app = express()
app.use(helmet())
app.use(morgan('common'))
/* app.use(isAuthenticated) */



const port = process.env.PORT

app.get('/recipe', (request, response) => {
    response.send('Hello World!')
})

app.get('/user', isAuthenticated, (request, response) => {

})

app.use(notFound)
app.use(errorHandler)


function isAuthenticated(request, response, next) {
    request.query.admin === 'true'
        ? response.send('You are admin!')
        : response.send('You cannot make calls to this API URL!')
    next()
}

function notFound(request, response, next) {
    const error = new Error(`Not found: ${request.originalUrl}`)
    response.status(404)
    next(error)
}

function errorHandler(error, request, response, next) {
    const statuscode = response.statusCode === 200 ? 500 : response.statusCode
    response.status(statuscode)
    response.json({
        statuscode: statuscode,
        message: error.message,
        stacktrace: error.stack,
    })
}

app.listen(3002, () => {
    console.log(`Servern är igång på port ${3002}`)

})
import express from 'express'
import { config } from 'dotenv'
import colors from 'colors'

// load the env vars
config();

const app = express()

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, ()=> {
    console.log(colors.bold.green(`Node server running at ${process.env.NODE_ENV} mode`))
})

// handle unhandledRejection errors

process.on('unhandledRejection', (err: any, promise) => {
    console.log(colors.bold.red(`Error: ${err.message}`))
    server.close(() => process.exit)
})
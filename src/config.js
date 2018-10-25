import { config } from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import express from 'express'

const SETTINGS = config()

export default app => {
    app.disable('x-powered-by')

    app.use(express.json())

    app.set('env', SETTINGS.parsed.ENV)
    app.set('config', SETTINGS.parsed)
    app.locals.env = app.get('env')
    app.locals.config = app.get('config')

    if (process.env.ENV === 'dev') {
        app.use(morgan("dev"))
    }
    app.use(cors())
}
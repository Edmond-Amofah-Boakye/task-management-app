import categoryRoute from './routes/category'
import taskRoute from './routes/task'
import userRoute from './routes/user'
import passporRoute from './routes/passport'
import passportAuth from './auth/passport'
import express, { Errback, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport = require('passport')
import cors from 'cors'


dotenv.config()

const app = express()
app.use(cors())
// app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.set("trust proxy", 1)

app.use(session({
    secret: "something",
    saveUninitialized: true,
    resave: false,
    cookie:{
        secure: process.env.NODE_ENV === "production"
    }
}))

app.use(passport.initialize())
app.use(passport.session())

passportAuth() //calling AouthConfig Function



//api endpoints middleware

app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/task", taskRoute)
app.use("/api/v1/user", userRoute)
app.use(passporRoute)
 
if(process.env.NODE_ENV == "development"){
    app.use(morgan("dev"))
}

import protect from './auth/protect'

app.get('/protect', protect, (req, res, next)=>{
    res.send(`${req.user}`)
})
















app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    return res.status(500).send(error)

})


app.use("*", (req: Request, res: Response, next: NextFunction)=>{
    return next(res.status(404).json({message: "no route of such found"}))
})


mongoose.connect(`${process.env.DB_CONNECTION}`)
    .then((data)=>{
        console.log(`database is connected on port ${data.connection.host}`);
        app.listen(process.env.PORT, ()=>{
            console.log(`server sucessfully connected on port ${process.env.PORT}`);
        }) 
    }).catch((error)=>{
        console.log(error);
    })

const express = require('express')
const cookieParser =require('cookie-parser')
const urlencoded=require("express")
const app = express();
const cors=require('cors')
const dotenv =require('dotenv')




// Using Middlewares

app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

dotenv.config({
  path:'./config/congig.env'
})

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

module.exports=app;




// Using Error Middleware
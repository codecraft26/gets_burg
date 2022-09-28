const express = require('express')
const cookieParser =require('cookie-parser')
const urlencoded=require("express")
const app = express();
const cors=require('cors')



// Using Middlewares

app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

module.exports=app;




// Using Error Middleware
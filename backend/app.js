const express = require('express')
const cookieParser =require('cookie-parser')
const urlencoded=require("express")
const app = express();
const cors=require('cors')
const dotenv =require('dotenv')
const passport=require('passport')



dotenv.config({
  path: "./config/config.env",
});

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

app.use(passport.authenticate("session"));
app.use(passport.initialize());

app.enable("trust proxy");

connectPassport();

// Importing Routes
const userRoute =require( "./routes/user.js");
// import orderRoute from "./routes/order.js";

app.use("/api/v1", userRoute);
// app.use("/api/v1", orderRoute);

// Using Error Middleware
app.use(errorMiddleware);
module.exports = app;
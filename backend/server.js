const app=require("./app")
const connectDB=require("./config/database")



connectDB();



app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});

app.listen(4000, () =>
  console.log(
    `Server is working on PORT:4000`
  )
);
const mongoose = require("mongoose");



const connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/getBurg', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Mongodb connected with server: $localhost 2700`);
    });
};

module.exports = connectDatabase;
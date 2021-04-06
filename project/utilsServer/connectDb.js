const mongoose = require("mongoose");


const connectDb=()=>{
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  })
  .then(()=> console.log('DB Connected'))
  .catch((err)=>{console.log(err)})
}

module.exports = connectDb;

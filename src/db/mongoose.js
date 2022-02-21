const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  // useCreateIndex:true
});
//   .then(() => console.log("ready to use"));

// const task=new Task({
//     description:'   learn nodejs',

// });

// task.save().then(result=>console.log(result)).catch(error=>console.log(error));

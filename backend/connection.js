const mongoose = require('mongoose');

const url = "mongodb+srv://siddharthsahu23:pratham@cluster0.3vjia.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";
// asynchronous function
mongoose.connect(url)
  .then((result) => {    //thenc
    console.log('database connected');

  })
  .catch((err) => {
    console.log(err);

  });

module.exports = mongoose;
const { Schema, model} = require('../connection');  //here schema is class and model is a function 



const mySchema = new Schema({
    name: String,
    email: { type: String,},   //if we want to give more validation then we use {}
    phone: { type: String},
    address: { type: String},
    vehicle: { type: String },
    services: { type: String },
    time: { type: String }, 
    createdAt: { type: Date, default: Date.now},
});

module.exports = model('appointment', mySchema); 
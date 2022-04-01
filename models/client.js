const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique

const ClientSchema = mongoose.Schema({
  cin_passport: { type: String, required: true },
  Nom:{type:String,required:true},
  Prenom:{type:String,required:true},
  num_tel1:{type:String,required:true},
  num_tel2:{type:String},
  email:{type:String},
});

module.exports= mongoose.model("Client", ClientSchema);
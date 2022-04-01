const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique
const Schema=mongoose.Schema;
const DeviceSchema = mongoose.Schema({
  imei: { type: String, required: true },
  status:{type:String,required:true},
  purchase_date:{type:String,required:true},
  guarantee:{type:String,required:true},
  nb_return_sav:{type:Number,required:true},
  insured:{type:Boolean,required:true},
  intervention:[{type:Schema.Types.ObjectId,ref:"Intervention"}],
  client:{type:Schema.Types.ObjectId,ref:"Client"},
});

module.exports= mongoose.model("Device", DeviceSchema);
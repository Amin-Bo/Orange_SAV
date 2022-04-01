const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique
const Schema = mongoose.Schema;
const InterventionSchema = mongoose.Schema({
  device: { type: Schema.Types.ObjectId, ref: "Device" },
  accessoires:[{type:String}],
  type_panne: { type: String, required: true },
  terminal_pret: { type: String, required: true },
  description: { type: String, required: true },
  workflow: { type: String, required: true },
});

module.exports= mongoose.model("Intervention", InterventionSchema);
const mongoose = require("mongoose");

const instaSchema = mongoose.Schema({
  // name: String,
   location: String,
  // likes:Number,
  description: String,
  PostImage: String,
  Date: {
    type: Date,
    default: Date,
  },
  name: {
    type: String,
  },
  likes: {
    type: Number,
    default: Math.ceil(Math.random() * 100),
  },
});

const Data = mongoose.model("Data", instaSchema);

module.exports = Data;

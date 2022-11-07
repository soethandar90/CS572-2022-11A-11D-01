const mongoose = require("mongoose");

const albumSchema = mongoose.Schema(
  {
    name: String,
    year: Number,
    noOfSongs: Number
  }
);

mongoose.model("Album", albumSchema, "album");

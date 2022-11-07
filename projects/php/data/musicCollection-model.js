const mongoose = require("mongoose");
const album = require("./album-model");

const musicCollectionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    dob: String,
    album: [album]
  });

mongoose.model("MusicCollection", musicCollectionSchema, "musicCollection");

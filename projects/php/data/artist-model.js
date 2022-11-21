//const album = require("./album-model");
//Tested : _id for each album was note created automatically when separate schema is used.

const mongoose = require(process.env.MONGOOSE);
const artistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    dob: String,
    album: [
      {
        name: String,
        year: Number,
        noOfSongs: Number
      }
    ]
  });

mongoose.model(process.env.ARTIST_SCHEMA_KEY, artistSchema, process.env.ARTIST_SCHEMA_NAME);

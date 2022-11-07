//Unused module
//Tested : _id for each album was note created automatically when separate schema is used.
const mongoose = require(process.env.MONGOOSE);
const albumSchema = mongoose.Schema(
  {
    name: String,
    year: Number,
    noOfSongs: Number
  }
);

mongoose.model(process.env.ALBUM_SCHEMA_KEY, albumSchema, process.env.ALBUM_SCHEMA_NAME);

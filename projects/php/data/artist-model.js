const mongoose = require(process.env.MONGOOSE);
const albumModel = require("./album-model");
const artistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "New Artist"
    },
    dob: String,
    album: [albumModel]
  });

mongoose.model(process.env.ARTIST_SCHEMA_KEY, artistSchema, process.env.ARTIST_SCHEMA_NAME);

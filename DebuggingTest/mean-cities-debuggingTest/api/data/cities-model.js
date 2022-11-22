const mongoose= require("mongoose");

const citySchema= mongoose.Schema({
    _id:String,
    city: String,
    zip: String,
    loc: { 
        y: Number, 
        x: Number
    },
    pop: Number,
    state: String
});

module.exports = mongoose.model(process.env.CITY_MODEL, citySchema, process.env.DB_CITIES_COLLECTION);

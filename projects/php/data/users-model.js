const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: String,
    username:String,
    password:String
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // }
});

//compile the model
mongoose.model("Users", userSchema, "users");
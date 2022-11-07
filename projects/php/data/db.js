require("./musicCollection-model");
//db.js will connect with mongoose
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", function () {
    console.log("Mongoose Connected");
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose Disconnected");
});

mongoose.connection.on("error", function (error) {
    console.log("Mongoose Connection Error", error);
});

process.on("SIGNT", function () {
    console.log("Interruption received");
    mongoose.connection.close(function () {
        console.log("Mongoose Close done.");
        process.exit(0);
    });
})

process.on("SIGTERM", function () {
    console.log("Termination received");
    mongoose.connection.close(function () {
        console.log("Mongoose Close done.");
        process.exit(0);
    });
})

process.once("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid, "SIGUSR2");
    });
})
require(process.env.ARTIST_COLLECTION_MODEL_PATH);
require("./users-model");
const mongoose = require(process.env.MONGOOSE);

mongoose.connect(process.env.DB_URL);

mongoose.connection.on(process.env.CONNECTED_STATUS, function () {
    console.log(process.env.MONGOOSE_CONNECTED_MESSAGE);
});

mongoose.connection.on(process.env.DISCONNECTED_STATUS, function () {
    console.log(process.env.MONGOOSE_CONNECTED_MESSAGE);
});

mongoose.connection.on(process.env.ERROR_STATUS, function (error) {
    console.log(process.env.MONGOOSE_CONNECTION_ERROR_MESSAGE, error);
});

process.on(process.env.SIGNT, function () {
    console.log(process.env.INTERRUPTION_RECEIVED_MESSAGE);
    mongoose.connection.close(function () {
        console.log(process.env.MONGOOSE_CLOSE_MESSAGE);
        process.exit(process.env.EXIT_CODE);
    });
})

process.on(process.env.SIGTERM, function () {
    console.log(process.env.TERMINATION_RECEIVED_MESSAGE);
    mongoose.connection.close(function () {
        console.log(process.env.MONGOOSE_CLOSE_MESSAGE);
        process.exit(process.env.EXIT_CODE);
    });
})

process.once(process.env.SIGUSR2, function () {
    mongoose.connection.close(function () {
        console.log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid, process.env.SIGUSR2);
    });
})
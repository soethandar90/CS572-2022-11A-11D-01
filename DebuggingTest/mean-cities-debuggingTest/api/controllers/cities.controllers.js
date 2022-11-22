require("../data/cities-model");
const mongoose = require("mongoose");
const City = mongoose.model(process.env.CITY_MODEL);

const getAll = function (req, res) {
    City.find().exec(function (err, cities) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: cities
        };
        if (err) {
            response.status = parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message = err;
        }
        res.status(response.status).json(
        response.message
        //Testing purpose
        //[{_id:"1", city:"Fairfield",zip:"52557", loc:{x:1,y:2}, pop:361, state:"IA"}]
        );
    });
}

const getOne = function (req, res) {
    const cityId = req.params.cityId;
    City.findById(cityId).exec(function (err, city) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: city
        };
        if (err) {
            response.status = parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message = err;
        } else if (!city) {
            response.status = parseInt(process.env.REST_API_RESOURCE_NOT_FOUND_ERROR, 10);
            response.message = {
                "message": process.env.REST_API_RESOURCE_NOT_FOUND_MESSAGE
            };
        }
        res.status(response.status).json(
            response.message
            //Testing purpose
            //{_id:"1", city:"Fairfield",zip:"525567",loc:{x:1, y:2},pop:361, state:"IA"}
            );
    });
}

const deleteOne = function (req, res) {
    console.log("This is inside deleteOne");
    const cityId = req.params.cityId;
    City.findByIdAndDelete(cityId).exec(function (err, city) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: city
        };
        if (err) {
            response.status = parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message = err;
        } else if (!city) {
            response.status = parseInt(process.env.REST_API_RESOURCE_NOT_FOUND_ERROR, 10);
            response.message = {
                "message": process.env.REST_API_RESOURCE_NOT_FOUND_MESSAGE
            };
        }
        res.status(response.status).json(response.message);
    });
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    deleteOne: deleteOne
};
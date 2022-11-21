const jwt = require("jsonwebtoken");

//this function decide, call next or not
//whether or not continue
const authenticate = function (req, res, next) {
    const response = {
        status: 403,
        message: { message: "No token provided" }
    };

    const headerExists = req.headers.authorization;
    console.log("Header exists " + headerExists);
    if (headerExists) {
        const token=req.headers.authorization.split(" ")[1];
        console.log(token);
        if(jwt.verify(process.env.JWT_PASSWORD)){
            next();
        }else{
            response.message = "Invalid";
        }
        next();
    } else {
        _sendResponse(res, response);
    }
};

_sendResponse = function (res, response) {
    res.status(response.status.json(response.message));
}

module.exports = {
    authenticate: authenticate
}
const mongoose = require(process.env.MONGOOSE);
const bcrypt = require("bcrypt");
const Users = mongoose.model("Users");

register = function (req, res) {
    console.log("User Register");

    bcrypt.genSalt(10, function (err, saltValue) {
        if (err) {
            res.status(500);
            res.message = "Error";
        } else {
            bcrypt.hash(req.body.password, saltValue, function (err, password) {
                const newUser = {
                    name: req.body.name,
                    username: req.body.username,
                    password: passwordHash
                };
                Users.create(newUser, function (err, result) {
                    const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: result };
                    if (err) {
                        console.log(process.env.ADD_ONE_ERROR_MESSAGE);
                        response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
                        response.message = err;
                    }
                    res.status(response.status).json(response.message);
                })
            });
            //const passwordHash = bcrypt.hashSync(req.body.password, salt);           
        }

    });
    //const salt = bcrypt.genSaltSync(10);//10 is Number of Rounds

}

loginSync = function (req, res) {

    console.log("login");
    const username = req.body.username;
    const password = req.body.password;
    Users.findOne({ username: username }).exec(function (err, result) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: result };

        if (err) {
            console.log("Error: " + err);
            response.status = 500;
            response.message = "Error";//don't give exact information
        } else {
            if (!user) {
                console.log("Error finding user" + err);
                response.status = 400;
                response.message = "Incorrect user or password.";//don't give exact information
            } else {
                console.log("User found check password");
                bcrypt.compareSync(password, user.password, function (error, passwordMatch) {
                    if (err) {
                        console.log("Error bcrypt compare" + err);
                    } else {
                        if (!passwordMatch) {
                            console.error("Password incorrect for user" + username);
                            response.status = 400;
                            response.message = "Incorrect username or password."
                        } else {
                            response.status = 200;
                            response.message = "Login successful"
                            //After login, create JasonWebToken and send
                            const token = jwt.sign({name:user.name},process.env.JWT_PASSWORD,{expiresIn:3600}); 
                            response.message = {success:true,token:token};
                        }
                    }
                    res.status(response.status).json(response.message);
                });

                //const passwordMatch = bcrypt.compareSync(password, user.password);
               
            }

        }
        if(response.status!==200){
        res.status(response.status).json(response.message);
    }
    });
}

login = function (req, res) {

    console.log("login");
    const username = req.body.username;
    const password = req.body.password;
    Users.findOne({ username: username }).exec(function (err, result) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: result };

        if (err) {
            console.log("Error: " + err);
            response.status = 500;
            response.message = "Error";//don't give exact information
        } else {
            if (!user) {
                console.log("Error finding user" + err);
                response.status = 400;
                response.message = "Incorrect user or password.";//don't give exact information
            } else {
                console.log("User found check password");
                bcrypt.compareSync(password, user.password, function (error, passwordMatch) {
                    if (err) {

                    } else {

                    }
                });

                //const passwordMatch = bcrypt.compareSync(password, user.password);
                if (!passwordMatch) {
                    console.error("Password incorrect for user" + username);
                    response.status = 400;
                    response.message = "Incorrect username or password."
                } else {
                    response.status = 200;
                    response.message = "Login successful"
                }
            }

        }
        res.status(response.status).json(response.message);
    });
}

login1 = function(req, res){};

module.exports = {
    addOne: register,
    login: login
}

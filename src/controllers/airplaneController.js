const {StatusCodes} = require("http-status-codes");
const {AirplaneService} = require("../services");
const {logger} = require('../config');
const { STRING } = require("sequelize");
const {successReponse,errorResponse} = require("../utils/common")

/*
    CREATE AIRPLANE API CONTRACT
    type : POST REQUEST
    data  : req.body {
        capacity : int,
        modelNumber : string
    }

*/
console.log(AirplaneService)


async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        successReponse.message = "SuccessFully Created an Airplane";
        successReponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(successReponse);
    } catch (error) {
        logger.error("Something went wrong while creating Airplane");
        errorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }

}

module.exports = {
    createAirplane,
}

const {StatusCodes} = require("http-status-codes");
const {AirplaneService} = require("../services");
const {logger} = require('../config');
const { STRING } = require("sequelize");
const {successReponse,errorResponse} = require("../utils/common");
const { success } = require("../utils/common/success-response");

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
        res.status(error.statusCode).json(errorResponse);
    }

}

/*Get All Airplanes API
    Method : GET
    Route : /v1/airplane/getAllAirplanes
    Data : None
*/


async function getAllAirplanes(req,res){
    try {
        const airplane = await AirplaneService.getAllAirplanes();
        successReponse.message = "Fetched all airplanes";
        successReponse.data = airplane;
        return res.status(StatusCodes.OK).json(successReponse);
    } catch (error) {
        logger.error("Cannot fetch All Airplanes");
        errorResponse.error = error;
        if(!error.statusCode){
            return res.status(StatusCodes.SERVICE_UNAVAILABLE).json(errorResponse);
        }
        return res.status(error.statusCode).json(errorResponse);
    }
}

/* Get Airplane by ID*/
const getAirplane = async (req,res)=>{
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        successReponse.data = airplane;
        return res.status(StatusCodes.OK).json(successReponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}



module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane
}

const {StatusCodes} = require("http-status-codes");
const {AirplaneService} = require("../services");
const {logger} = require('../config')

/*
    CREATE AIRPLANE API CONTRACT
    type : POST REQUEST
    data  : req.body {
        capacity : int,
        modelNumber : string
    }

*/



async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : "Successfully created an Airplane",
            data : airplane,
            error : {}
        })
    } catch (error) {
        logger.error("Something went wrong while creating Airplane");
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "Something went wrong",
            data : {},
            error : error
        })
    }

}

module.exports = createAirplane

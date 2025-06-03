const {StatusCodes} = require("http-status-codes");
const {AirplaneService} = require("../services");
const {logger} = require('../config');
const { STRING } = require("sequelize");

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

const updateAirPlane = async (req,res)=>{
    try {
        const id = req.id;
        const data = req.data;
        const airPlane = await AirplaneService.updateAirPlane(id,data);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Airplane updated Successfully",
            data : airPlane,
            error : {}
        })
    } catch (error) {
        logger.error("Something went wrong while Updating AIrplane");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "Something went wrong while Updating AIrplane",
            data : {},
            error : error
        })
    }
}

const getAllData = async  (req,res)=>{
    try {
        const airplanes = await AirplaneService.getAllData();
        res.status(StatusCodes.OK).json({
            success : true,
            message : "All information is retrieved",
            data : airplanes,
            error : {}
        })
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "Something went wrong while retreving all data",
            data : {},
            error : error
        })
    }
}





module.exports = {
    createAirplane,
    updateAirPlane,
    getAllData
}

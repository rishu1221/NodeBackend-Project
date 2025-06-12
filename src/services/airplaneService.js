const { StatusCodes } = require("http-status-codes");
const {AirplaneRepository} = require("../repositories/index");
const AppError = require("../utils/errors/app-error");
const { errorResponse } = require("../utils/common");

const airplaneObject = new AirplaneRepository();

//Create Airplane Service
const createAirplane = async (data)=>{
    try {
        const airplane = await airplaneObject.create(data);
        return airplane;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explaination = [];
            error.errors.forEach((err)=>{
                explaination.push(err.message);
            })
            console.log(explaination);
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create Airplane Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//Get all Airplanes service
const getAllAirplanes = async ()=>{
    try {
        const airplane = airplaneObject.getAll();
        return airplane;
    } catch (error) {
        throw new errorResponse("Cannot get All Airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//Get Airplane by PK
const getAirplane = async (id)=>{
    try {
        const airplane = await airplaneObject.get(id);
        return airplane;

    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("Airplane not found with this ID",error.statusCode);
        }
        throw error;
    }
}



module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane
    
};
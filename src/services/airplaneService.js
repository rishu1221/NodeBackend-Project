const { StatusCodes } = require("http-status-codes");
const {AirplaneRepository} = require("../repositories/index");
const AppError = require("../utils/errors/app-error");

const airplaneObject = new AirplaneRepository();

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

module.exports = {
    createAirplane,
    
};
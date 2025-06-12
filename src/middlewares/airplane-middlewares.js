const { StatusCodes } = require("http-status-codes")

const {errorResponse} =require("../utils/common")

const validateCreateRequest = (req,res,next)=>{
    if(!req.body.modelNumber){
        errorResponse.message = "Something went wrong while Creating Airplane";
        errorResponse.error = {"msg":"Please provide modelNumber"};
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

const validateGetAirplane = (req,res,next)=>{
    if(!req.params.id){
        errorResponse.message = "Something went wrong while fetching Plane";
        errorResponse.error = {"msg " : "Please provide ID"};
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}


module.exports = {validateCreateRequest,
    validateGetAirplane
}
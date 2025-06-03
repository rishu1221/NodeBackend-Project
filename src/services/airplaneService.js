const {AirplaneRepository} = require("../repositories/index")

const airplaneObject = new AirplaneRepository();

const createAirplane = async (data)=>{
    try {
        const airplane = await airplaneObject.create(data);
        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const updateAirPlane = async (id,data)=>{
    try {
        const airPlane = await airplaneObject.update(id,data);
        return airPlane;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getAllData = async ()=>{
    try {
        const airplane = await airplaneObject.getAll();
        return airplane;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    createAirplane,
    updateAirPlane,
    getAllData
};
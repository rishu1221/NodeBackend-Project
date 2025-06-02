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

module.exports = {
    createAirplane
};
const CrudRepository = require("./crud-repository");
const {Airplane} = require('../models');



class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }

    async somerawUqery(){
        console.log("HI I am the raw query.");
    }
}



module.exports = AirplaneRepository;
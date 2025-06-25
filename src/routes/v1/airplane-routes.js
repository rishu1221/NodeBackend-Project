const express = require("express")
const {AirPlaneController} = require("../../controllers/index");
const {AirplaneMiddleware} = require("../../middlewares")
const router = express.Router();


router.post("/",AirplaneMiddleware.validateCreateRequest,AirPlaneController.createAirplane);
router.get('/',AirPlaneController.getAllAirplanes)
router.get('/:id',AirplaneMiddleware.validateGetAirplane,AirPlaneController.getAirplane)
router.delete('/:id',AirPlaneController.deleteAirplane);
module.exports = {
    airplaneRouter : router
}
 
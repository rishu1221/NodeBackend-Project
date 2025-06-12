const express = require("express")
const {AirPlaneController} = require("../../controllers/index");
const {AirplaneMiddleware} = require("../../middlewares")
const router = express.Router();

router.use("/createAirplane",AirplaneMiddleware.validateCreateRequest);
router.post("/createAirplane",AirPlaneController.createAirplane);
router.get('/getAllAirplanes',AirPlaneController.getAllAirplanes)
router.post('/getAirplane/:id',AirplaneMiddleware.validateGetAirplane,AirPlaneController.getAirplane)
router.use('/getAirplane/',AirplaneMiddleware.validateGetAirplane)
module.exports = {
    airplaneRouter : router
}
 
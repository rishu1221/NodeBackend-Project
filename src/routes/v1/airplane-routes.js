const express = require("express")
const {AirPlaneController} = require("../../controllers/index");
const {AirplaneMiddleware} = require("../../middlewares")
const router = express.Router();

router.use("/createAirplane",AirplaneMiddleware.validateCreateRequest);
router.post("/createAirplane",AirPlaneController.createAirplane);
module.exports = {
    airplaneRouter : router
}
 
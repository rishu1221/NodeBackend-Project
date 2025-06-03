const express = require("express")
const {AirPlaneController} = require("../../controllers/index");
const router = express.Router();

router.post("/createAirplane",AirPlaneController.createAirplane);
router.post('/updateAirplane',AirPlaneController.updateAirPlane);
router.get("/getAll",AirPlaneController.getAllData);
module.exports = {
    airplaneRouter : router
}

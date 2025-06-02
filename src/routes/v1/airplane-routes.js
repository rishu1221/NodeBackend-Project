const express = require("express")
const {AirPlaneController} = require("../../controllers/index");

const router = express.Router();

router.post("/createAirplane",AirPlaneController);

module.exports = {
    airplaneRouter : router
}

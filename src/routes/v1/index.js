const express = require("express")
const {infoController} = require("../../controllers/index")
const {airplaneRouter} = require("./airplane-routes")

const router = express.Router();

router.get("/info",infoController);
router.use("/airplane",airplaneRouter);

module.exports = {
    v1Routes : router
}
const {info} = require('./info-controller')
const createAirplane = require('./airplaneController');

module.exports = {
    infoController : info,
    AirPlaneController : createAirplane
}
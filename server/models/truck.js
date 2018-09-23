var mongoose = require('mongoose');

var TruckSchema = new mongoose.Schema({
  truckID: Number,
  driverID: Number,
  longitude: Number,
  latitude: Number,
  speed: Number,
  state: String,
  zipCode: String,
  lastSeen: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Truck', TruckSchema);

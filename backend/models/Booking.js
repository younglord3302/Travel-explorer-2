const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  travelDate: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);

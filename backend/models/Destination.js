const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String },
  price: { type: Number },
  rating: { type: Number, min: 0, max: 5 }
});

module.exports = mongoose.model('Destination', destinationSchema);

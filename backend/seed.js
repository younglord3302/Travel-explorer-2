const mongoose = require('mongoose');
const Destination = require('./models/Destination');
require('dotenv').config();

const sampleDestinations = [
  {
    name: 'Paris, France',
    description: 'Experience the romance and charm of the City of Light with iconic landmarks like the Eiffel Tower and Louvre Museum.',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop',
    price: 1500,
    rating: 4.8
  },
  {
    name: 'Tokyo, Japan',
    description: 'Immerse yourself in the vibrant culture of Tokyo, from traditional temples to cutting-edge technology districts.',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
    price: 2000,
    rating: 4.9
  },
  {
    name: 'Bali, Indonesia',
    description: 'Relax on pristine beaches and explore ancient temples in this tropical paradise known for its stunning landscapes.',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
    price: 1200,
    rating: 4.7
  },
  {
    name: 'New York City, USA',
    description: 'Discover the energy of the Big Apple with world-class museums, Broadway shows, and diverse neighborhoods.',
    location: 'New York City, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
    price: 1800,
    rating: 4.6
  },
  {
    name: 'Santorini, Greece',
    description: 'Marvel at the breathtaking sunsets and white-washed buildings perched on dramatic cliffs overlooking the Aegean Sea.',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
    price: 1600,
    rating: 4.9
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/travel');

    // Clear existing destinations
    await Destination.deleteMany({});

    // Insert sample destinations
    await Destination.insertMany(sampleDestinations);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

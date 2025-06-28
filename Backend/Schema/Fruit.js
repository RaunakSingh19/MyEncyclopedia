// const mongoose = require('mongoose');

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   color: String,
//   type: String,
//   image: String,
//   taste: String,
//   description: String,
//   protein: String,
//   benefits: String,
//   drawbacks: String,
// });

// module.exports = mongoose.model('Fruit', fruitSchema);
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  taste: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  protein: {
    type: String,
    trim: true
  },
  benefits: {
    type: String,
    trim: true
  },
  drawbacks: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Fruit', fruitSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  imdbID: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Year: {
    type: Number,
    required: true,
  },
  Poster: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  reaction: {
    type: String,
  },
});

module.exports = mongoose.model('Favorite', favoriteSchema);

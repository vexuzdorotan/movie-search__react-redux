const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
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
  reaction: {
    type: String,
  },
});

favoriteSchema.index({ imdbID: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);

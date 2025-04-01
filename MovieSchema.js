const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  img: String,
  details: String,
  morningShow: {
    seats: {
      A: [
        { seatNumber: Number, isBooked: Boolean },
      ],
      B: [
        { seatNumber: Number, isBooked: Boolean },
      ],
    },
  },
  noonShow: {
    seats: {
      A: [
        { seatNumber: Number, isBooked: Boolean },
      ],
      B: [
        { seatNumber: Number, isBooked: Boolean },
      ],
    },
  },
  firstShow: {
    seats: {
      A: [
        { seatNumber: Number, isBooked: Boolean },
      ],
      B: [
        { seatNumber: Number, isBooked: Boolean },
      ],
    },
  },
  secondShow: {
    seats: {
      A: [
        { seatNumber: Number, isBooked: Boolean },
      ],
      B: [
        { seatNumber: Number, isBooked: Boolean },
      ],
    },
  },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

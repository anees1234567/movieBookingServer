const Movie = require("./MovieSchema");
const bookSeat = async (req, res) => {
  try {
    const { movie, show, row, seat } = req.body;

    // Validate payload
    if (!movie || !show || !row || !seat) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Find the movie by name
    const movieData = await Movie.findOne({ movieName: movie });
    if (!movieData) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    console.log(movieData[show].seats[row]);
    // Check if the show exists
    // if (!movieData[show]) {
        
        
    //   return res.status(400).json({ message: `Show '${show}' not found` });
    // }

    // Check if the row exists
    if (!movieData[show].seats[row]) {
      return res.status(400).json({ message: `Row '${row}' not found in ${show}` });
    }

    // Find the seat in the specified row
    const seatToBook = movieData[show].seats[row].find((s) => s.seatNumber === seat);
    if (!seatToBook) {
      return res.status(404).json({ message: `Seat number '${seat}' not found in row '${row}'` });
    }

    // Check if the seat is already booked
    if (seatToBook.isBooked) {
      return res.status(400).json({ message: 'Seat already booked' });
    }
    // Book the seat
    seatToBook.isBooked = true;
    // Save the updated movie data
    await movieData.save();
    res.status(200).json({ message: 'Seat booked successfully', responseIndicator:"success" });
  } catch (error) {
    console.error('Error booking seat:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { bookSeat };

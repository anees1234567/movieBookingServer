const Movie = require('./MovieSchema');


const seats = {
    A: Array.from({ length: 10 }, (_, i) => ({ seatNumber: i + 1, isBooked: false })),
    B: Array.from({ length: 10 }, (_, i) => ({ seatNumber: i + 1, isBooked: false })),
    C: Array.from({ length: 10 }, (_, i) => ({ seatNumber: i + 1, isBooked: false })),
    D: Array.from({ length: 10 }, (_, i) => ({ seatNumber: i + 1, isBooked: false })),
    E: Array.from({ length: 10 }, (_, i) => ({ seatNumber: i + 1, isBooked: false })),
    F: Array.from({ length: 10 }, (_, i) => ({ seatNumber: i + 1, isBooked: false })),
  };

const insertMovies = async (req,res) => {
  try {

    const { movieName, img, details } = req.body;

    const deepClone = (obj) => JSON.parse(JSON.stringify(obj)); // Clone utility

    const movies = {
      movieName,
      img,
      details,
      morningShow:{ seats: deepClone(seats) },
      noonShow: { seats: deepClone(seats) },
      firstShow: { seats: deepClone(seats) },
      secondShow: { seats: deepClone(seats) },
    };

    const result = await Movie.insertMany(movies);
    console.log('Movies inserted:', result);
    res.status(200).json({
        message: 'Movies inserted successfully',
        responseIndicator: "success"
    });
  } catch (error) {
    console.error('Error inserting movies:', error);
    res.status(500).json({
        message: 'Error inserting movies',
        error: error.message
    });
  }
};

const getAllMovies = async (req, res) => {
    const data = await Movie.find();
    if(data){
        res.status(200).json({
            message: 'Movies fetched successfully',
            data:data
        });
    }else{
        res.status(500).json({
            message: 'error in fetching movies',
            data:data
        });
    }
    
   
  };

module.exports = { insertMovies,getAllMovies};

const express = require('express');
const connectDB = require('./db');
const { bookSeat } = require('./controller');
const { insertMovies, getAllMovies } = require('./addMovieController');
const app = express();
require('dotenv').config();
const cors = require('cors');



connectDB()
app.use(express.json());
app.use(cors)
app.get('/', (req, res) => {
    res.send('Welcome to the Movie Booking App API!');
});
// Use PORT from the environment or default to 10000 if not specified
const PORT = process.env.PORT || 10000;

// Bind the server to 0.0.0.0 so it's accessible externally
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});


app.post('/bookMovie', (req,res) => {
    bookSeat(req,res)
});

app.post("/addMovies",(req,res)=>{
    insertMovies(req,res)
})

app.get("/getAllMovies",(req,res)=>{
    getAllMovies(req,res)
    
})



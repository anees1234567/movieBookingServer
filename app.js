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
const PORT = process.env.PORT || 3000;
app.listen(PORT,'0.0.0.0', () => {
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



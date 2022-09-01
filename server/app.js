const express = require('express');
const mongoose = require ('mongoose');
require('dotenv/config');

const app = express();

// Routes

app.get('/',(req,res) => {
    res.send('We are on Home');
});



// lien mongodb atlas : https://cloud.mongodb.com/v2/613e35c09608054190e573cf#clusters => n'oubliez pas de connecter dans atlas avec la bd qui c'appel CRUD

mongoose.connect(process.env.DB_CONNECTION,() => console.log('DataBase connected succesfully ...'));



//Server

const PORT = 8000;

app.listen(PORT,() =>{ console.log(`Server is running succesfully on PORT :${PORT}`)});
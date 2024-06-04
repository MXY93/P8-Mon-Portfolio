const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@clusterfirstone.zwko5fr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFirstOne`)
    .then(() => {
        console.log('Connexion à MongoDB réussie !');
    })
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
};
app.use(cors(corsOptions));
  
  
app.get('/', (req, res) => {
    res.send('Hello World! Comment ça va ?');
});

module.exports = app;
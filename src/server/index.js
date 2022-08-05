const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 8000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Application API routing
app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/test', (req, res) => {
  res.send(mockAPIResponse);
});

// Setting up server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Now app is running on http://localhost:${PORT}`);
});

const express = require ('express');
const cors = require ('cors');
const connectDB = require ('./config/db');

require ('dotenv').config ();

const app = express ();

app.use (cors ());

const PORT = process.env.PORT || 5000;

connectDB ();

app.listen (PORT, () => {
  console.log ('Server is running on port ', PORT);
});

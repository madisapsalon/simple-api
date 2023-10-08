// Import the required modules using ES6 import syntax
import express from 'express';
import dotenv from 'dotenv'

dotenv.config();
const appEnvironment = process.env.APP_ENV

// Create an instance of the Express application
const app = express();

// Define a route for the endpoint
app.get('/hello', (req, res) => {
  res.send(`Hello, World from ${appEnvironment}`);
});

// Define the port on which the server will listen
const port = 8080;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

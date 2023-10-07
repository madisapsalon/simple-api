// Import the required modules using ES6 import syntax
import express from 'express';

// Create an instance of the Express application
const app = express();

// Define a route for the endpoint
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Define the port on which the server will listen
const port = 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/connectDb.js'; // Note the '.js' extension

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDb();

// Initialize express application
const app = express();

// Middleware
app.use(morgan('dev')); // Logs HTTP requests to the console
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Routes
app.use('/api/v1/users', (await import('./routes/userRoute.js')).default); // Use dynamic import with ES module syntax

// Define the port to listen on
const PORT = process.env.PORT || 8080; // Use PORT from environment variables if available, otherwise default to 8080

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.green); // Added color for better console output visibility
});

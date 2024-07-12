
import mongoose from 'mongoose';
import colors from 'colors';

// Database connection function
const connectDb = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log a success message with colors
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    // Log an error message with colors
    console.log(`${error}`.bgRed);
  }
};

// Export the connectDb function as the default export
export default connectDb;

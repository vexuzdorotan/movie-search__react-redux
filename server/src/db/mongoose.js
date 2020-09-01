const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB connected at ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

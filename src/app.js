const mongoose = require('mongoose');
require('dotenv').config(); // If you're using environment variables

const port = process.env.PORT || 5500
const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const bodyParser = require('body-parser');

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



// Other configurations, middleware, etc.

// Import and use your routes
const authRoutes = require('./routes/auth')
app.use('/auth', authRoutes)

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);


// MongoDB connection URI
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notifications of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notifications of successful connection)
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log('Server running @', port);
  }
});


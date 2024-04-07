// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, '')));

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/login_signup_jwt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/api/auth', require('./routes/auth'));

// Catch-all route for serving HTML files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

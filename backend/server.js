const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

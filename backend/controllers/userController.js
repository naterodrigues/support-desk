const asyncHandler = require('express-async-handler');

// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    // Client Error
    res.status(400);
    throw new AppError('Please include all fields');
  }
  res.send('Register Route');
});

// @desc Login a user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login');
});

module.exports = {
  registerUser,
  loginUser,
};

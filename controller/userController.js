const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/Users');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Invalid email format' });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user instance with hashed password
    user = new User({ name, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Generate JWT token
    const payload = {
      user: {
        id: user._id,
        name: user.name,
        email: user.email // Assuming your user model has _id field
      },
    };

    // Sign the token using JWT_SECRET from environment variables
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5m' }, 
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ user, token }); // Send the JWT as a response
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = registerUser;

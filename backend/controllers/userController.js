import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
// @Desc      Authenticate User and get Token
// @Route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { password, email } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @Desc      GET User profile
// @Route     GET /api/users/profile
// @access    Private

const getUserProfile = asyncHandler(async (req, res) => {

  res.send('Success')
})

export {
  authUser,
  getUserProfile
}
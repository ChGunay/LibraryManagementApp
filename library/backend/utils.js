import jwt from 'jsonwebtoken';
//generating a custom token for every user by encrypting their user info

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'encodedtokentogenerate',
    {
      expiresIn: '360d',
    }
  );
};
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();//creating routers with express


userRouter.get(
    //creating the api
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await User.remove({});
    //add users in data.js to mongodb user collection
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });//sending request
  })
);
//sign in router
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    //ajax request to check user email in the database
    const user = await User.findOne({ email: req.body.email });
    if (user) {//if user exist with correct email check password
      if (req.body.password==user.password) {
        res.send({
          //data to send
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          //i will use json web token to generate custom tokens
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'User does not exist' });//user does not exist
  })
);
userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const createdUser=await user.save();
    res.send({
      //data to send
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      //i will use json web token to generate custom tokens
      token: generateToken(createdUser),
    })
  })
);
userRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);


export default userRouter;
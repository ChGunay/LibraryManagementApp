import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../util.js';

const userRouter = express.Router();//creating routers with express

userRouter.get(
    //creating the api
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    //add users in data.js to mongodb user collection
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });//sending request
  })
);

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  if(user){
    if(req.body.password == user.password){
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)

      });
      return;
    }
  }
  res.status(401).send({message:'Invalıd email or password'});
}))

export default userRouter;

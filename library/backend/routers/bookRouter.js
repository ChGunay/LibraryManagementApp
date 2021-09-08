import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Book from '../models/bookModel.js';

const bookRouter = express.Router();
//list products api
bookRouter.get( 
  '/',
  expressAsyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.send(books);
  })
);

bookRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Book.remove({});
    const createdBooks = await Book.insertMany(data.books);
    res.send({ createdBooks });
  })
);


/*
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
*/


export default bookRouter;
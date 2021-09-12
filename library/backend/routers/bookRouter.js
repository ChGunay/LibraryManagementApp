import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Book from '../models/bookModel.js';
import { isAdmin, isAuth } from '../utils.js';

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
bookRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const book = new Book({
      name: 'sample name '+ Date.now(),
      image: '/images/book-1.jpg',
      author: 'sample author',
    });
    const createdBook = await book.save();
    res.send({ message: 'Book Created', book: createdBook });
  })
);
bookRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (book) {
      console.log(book);
      book.name = req.body.name;
      book.author = req.body.author;
      book.image = req.body.image;
      
      const updatedBook = await book.save();
      res.send({ message: 'Book Updated', book: updatedBook });
    } else {
      res.status(404).send({ message: 'Book Not Found' });
    }
  })
);
bookRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      const deleteBook = await book.remove();
      res.send({ message: 'Book Deleted', book: deleteBook });
    } else {
      res.status(404).send({ message: 'Book Not Found' });
    }
  })
);



export default bookRouter;
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    name: { type: String},
    image: { type: String },
    author: { type: String },
    
  },
  {
    timestamps: true,
  }
);
const Book = mongoose.model('Book', bookSchema);

export default Book;

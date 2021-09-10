import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);
const Book = mongoose.model('Book', bookSchema);

export default Book;

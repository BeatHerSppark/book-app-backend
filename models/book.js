import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  description: String,
  genres: [String],
  ratings: {
    type: [Number],
    default: [],
  },
  reviews: {
    type: [String],
    default: [],
  },
});

const BookModel = mongoose.model("BookModel", bookSchema);

export default BookModel;

import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  description: String,
  genres: [String],
  ratings: [
    {
      user: String,
      rating: Number,
    },
  ],
  reviews: [
    {
      user: String,
      review: String,
    },
  ],
  releaseDate: String,
  addedAt: {
    type: Date,
    default: new Date(),
  },
});

const BookModel = mongoose.model("BookModel", bookSchema);

export default BookModel;

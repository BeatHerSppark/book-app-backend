import express from "express";

import {
  getBooks,
  getBooksBySearch,
  getBook,
  addBook,
  updateBook,
  deleteBook,
  rateBook,
  reviewBook,
} from "../controllers/books.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getBooks);
router.get("/search", auth, getBooksBySearch);
router.get("/:id", auth, getBook);
router.post("/", auth, addBook);
router.patch("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);
router.patch("/:id/rateBook", auth, rateBook);
router.post("/:id/reviewBook", auth, reviewBook);

export default router;

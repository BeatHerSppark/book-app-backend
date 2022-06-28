import mongoose from "mongoose";
import BookModel from "../models/book.js";

export const getBooks = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 20;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await BookModel.countDocuments({});

    const books = await BookModel.find()
      .sort({ title: 1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: books,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBooksBySearch = async (req, res) => {};

export const getBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await BookModel.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addBook = async (req, res) => {
  const book = req.body;

  const newBook = new BookModel({
    ...book,
    addedAt: new Date().toISOString(),
  });

  try {
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {};

export const deleteBook = async (req, res) => {};

export const rateBook = async (req, res) => {};

export const reviewBook = async (req, res) => {};

import express from "express";
import Author from "../models/Author.js";
import Book from "../models/Book.js";
import Tags from "../models/Tags.js";

const router = express.Router();

router.get("/mainpage", async (req, res) => {
  const lastFiveBooks = await Book.find().sort({ createdAt: -1 }).limit(5);

  res.json(lastFiveBooks);
});

router.get("/books", async (req, res) => {
  const books = await Book.find().populate("author");

  res.json(books);
});

router.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id).populate("author");

  res.json(book);
});

router.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find();
    const books = await Book.find().populate("author");

    const sortedAuthors = authors.sort((a, b) => a.name.localeCompare(b.name));

    const booksByAuthor = [];

    sortedAuthors.forEach((author) => {
      const authorBooks = books.filter((book) =>
        book.author.some((a) => a._id.toString() === author._id.toString())
      );

      booksByAuthor.push({
        name: author.name,
        id: author._id,
        books: authorBooks,
      });
    });

    res.json(booksByAuthor);
  } catch (error) {
    console.error("Error al obtener autores y libros:", error);
    res.status(500).json({ message: "Error al obtener autores y libros" });
  }
});

router.post("/add-author", async (req, res) => {
  const { name } = req.body;

  const author = new Author({ name });

  try {
    await author.save();
    console.log(`Author ${name} added`);
  } catch (error) {
    console.error("error adding author:", error);
    return res.status(500).json({ message: "Error al agregar el autor" });
  }

  res.json(author);
});

router.post("/add-book", async (req, res) => {
  const { title, author, description, url, cover, tags } = req.body;

  const book = new Book({
    title,
    author,
    description,
    url,
    cover,
    tags,
  });

  try {
    await book.save();
    console.log(`Se agregó el libro ${title} de ${author}`);
  } catch (error) {
    console.error("Error al agregar el libro:", error);
    return res.status(500).json({ message: "Error al agregar el libro" });
  }

  res.json(book);
});

router.get("/search", async (req, res) => {
  const { query } = req.query;

  try {
    const matchingAuthors = await Author.find({
      name: { $regex: query, $options: "i" },
    });

    const authorIds = matchingAuthors.map((author) => author._id);

    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { tags: { $regex: query, $options: "i" } },
        { author: { $in: authorIds } },
      ],
    }).populate("author");

    res.json(books);
  } catch (error) {
    console.error("Error en la búsqueda de libros y autores:", error);
    res.status(500).json({ message: "Error en la búsqueda" });
  }
});

router.get("/tags", async (req, res) => {
  const tags = await Tags.find();

  res.json(tags);
});

router.post("/add-tag", async (req, res) => {
  const data = req.body;

  data.forEach(async (newTag) => {
    const { name } = newTag;

    const tag = new Tags({ name });

    try {
      await tag.save();
      console.log(`Se agregó el tag ${name}`);
    } catch (error) {
      console.error("Error al agregar el tag:", error);
      return res.status(500).json({ message: "Error al agregar el tag" });
    }
  });

  res.status(201).json(data);
});

export default router;

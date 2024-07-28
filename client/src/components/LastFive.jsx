import { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

export default function LastFive() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/mainpage");

        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <h2 className="sub-title">Últimos libros añadidos</h2>

      <div className="books-covers">
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}

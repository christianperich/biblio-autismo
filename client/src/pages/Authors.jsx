import axios from "axios";
import { useState, useEffect } from "react";
import Book from "../components/Book";

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    document.title = "Biblio Autismo - Autores";

    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/authors");

        setAuthors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="sub-title">Todos los Autores</h1>

        <div className="">
          {authors.map((author) => (
            <div key={author.id}>
              <h2>{author.name}</h2>
              <div className="books-covers">
                {author.books.map((book) => (
                  <Book key={book._id} book={book}>
                    <a href={`/books/${book._id}`} key={book._id}>
                      {book.title}
                    </a>
                  </Book>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

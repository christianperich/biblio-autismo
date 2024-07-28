import { useState, useEffect } from "react";
import axios from "axios";
import Book from "../components/Book";
import "../css/Book.css";
import SearchForm from "../components/SearchForm";
import Categories from "../components/Categories";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [h2title, setH2title] = useState("Todos los libros");

  useEffect(() => {
    document.title = "Biblio Autismo - Libros";
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books");

        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (booksFiltered) => {
    setBooks(booksFiltered);
    setH2title(`Resultados de la búsqueda:`);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <div className="container">
        <div className="content">
          <div>
            <h2 className="sub-title">{h2title}</h2>

            <div className="books-covers">
              {books.map((book) => (
                <Book key={book._id} book={book} />
              ))}
            </div>
          </div>

          <div className="sidebar">
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
}

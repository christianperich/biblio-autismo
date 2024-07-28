import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:3000/api/books/${id}`);
      const data = await response.json();
      document.title = `Biblio Autismo - ${data.title}`;
      setBook(data);
    };
    fetchBook();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="book-info">
          <img className="book-info-img" src={book.cover} alt="" />

          <div>
            <h1>{book.title}</h1>
            <h2>
              {book.author && book.author.length > 0
                ? book.author.map((a) => a.name).join(", ")
                : "Autor desconocido"}
            </h2>
            <p>{book.description}</p>
            <a href={book.url} className="btn btn-primary" target="blank">
              Descargar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import Creatable from "react-select/creatable";
import AuthorsList from "./AuthorsList";
import Tags from "./Tags";

import "../css/Forms.css";

export default function NewBookForm() {
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [cover, setCover] = useState("");
  const [tags, setTags] = useState([]);

  const [newTagsList, setNewTagsList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      description,
      url,
      cover,
      tags,
    };

    console.log(newBook);

    console.log(newTagsList);

    // try {
    //   if (newTagsList.length > 0) {
    //     const response = await axios.post(
    //       "http://localhost:3000/api/add-tags",
    //       newTagsList
    //     );
    //   }

    //   const response = await axios.post(
    //     "http://localhost:3000/api/add-book",
    //     newBook
    //   );

    //   setTitle("");
    //   setAuthor("");
    //   setDescription("");
    //   setUrl("");
    //   setCover("");

    //   setMessage("El libro fue agregado exitosamente");
    // } catch (error) {
    //   console.error(error);
    //   setMessage("Hubo un error al agregar el libro");
    // }
  };

  return (
    <>
      <div className="container">
        <form className="new-book-form" action="" onSubmit={handleSubmit}>
          <h1>Agregar un nuevo libro</h1>

          <div className="form-group">
            <label htmlFor="author">Autor</label>
            <AuthorsList setAuthor={setAuthor} />
          </div>

          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">URL de descarga</label>
            <input
              type="url"
              name="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cover">URL de portada</label>
            <input
              type="url"
              name="cover"
              id="cover"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <Tags setTags={setTags} setNewTagsList={setNewTagsList} />
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">
              Agregar Libro
            </button>
            <a href="/" className="btn btn-danger">
              Cancelar
            </a>
          </div>
        </form>
        <p className="message">{message}</p>
      </div>
    </>
  );
}

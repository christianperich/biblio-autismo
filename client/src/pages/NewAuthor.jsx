import { useState } from "react";
import axios from "axios";

import Select from "react-select";
import Creatable from "react-select/creatable";

export default function NewAuthor() {
  const [authorname, setAuthorname] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitAauthor = async (e) => {
    e.preventDefault();

    const newAuthor = {
      name: authorname,
    };

    console.log(newAuthor);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/add-author",
        newAuthor
      );
      setAuthorname("");
      setMessage("El autor fue agregado exitosamente");
    } catch (error) {
      console.error(error);
      setMessage("Hubo un error al agregar el autor");
    }
  };

  return (
    <div className="container">
      <form className="new-book-form" onSubmit={handleSubmitAauthor}>
        <h1>Agregar un autor</h1>
        <div className="form-group">
          <input
            type="text"
            name="newAuthor"
            placeholder="Nombre del autor"
            value={authorname}
            onChange={(e) => setAuthorname(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">
            Agregar autor
          </button>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

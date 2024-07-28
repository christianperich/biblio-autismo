import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import Select from "react-select";

export default function AuthorsList({ setAuthor }) {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const options = authors.map((author) => ({
    value: author.id,
    label: author.name,
  }));

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/authors");
        setAuthors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <>
      <div className="authorsSelect">
        <Select
          className="selectAuthor"
          placeholder="Selecciona un autor..."
          options={options}
          onChange={(selectedOption) => {
            setSelectedAuthor(selectedOption);
            setAuthor(selectedOption ? selectedOption.value : null);
          }}
        />
        <a href="/agregar-autor">
          <FaPlusCircle />
        </a>
      </div>
    </>
  );
}

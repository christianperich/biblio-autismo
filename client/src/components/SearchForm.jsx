import axios from "axios";
import { useState, useEffect } from "react";

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/api/search?query=${search}`
      );
      setSearch("");
      onSearch(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar libros..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

import Creatable from "react-select/creatable";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Tags({ setTags, setNewTagsList }) {
  const [tagsList, setTagsList] = useState([]);

  const allTags = tagsList.map((tag) => ({ value: tag.name, label: tag.name }));

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tags");
        setTagsList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTags();
  }, []);

  const handleOnChange = (tags) => {
    const tagsNames = tags.map((tag) => tag.value);
    setTags(tagsNames);

    const newTags = tags
      .filter((tag) => tag.__isNew__)
      .map((tag) => ({ name: tag.value }));

    setNewTagsList(newTags);
  };

  return (
    <div>
      <Creatable
        isMulti
        placeholder="Agrega tags"
        options={allTags}
        onChange={handleOnChange}
      />
    </div>
  );
}

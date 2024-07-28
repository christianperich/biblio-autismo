import { useEffect } from "react";
import NewBookForm from "../components/NewBookForm";

export default function NewBook() {
  useEffect(() => {
    document.title = "Biblio Autismo - Agregar Nuevo Libro";
  }, []);

  return (
    <>
      <NewBookForm />
    </>
  );
}

import "../css/Nav.css";
import SearchForm from "./SearchForm";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="nav-side">
          <h1 className="logo">
            <a href="/">
              Biblio <span>Autismo</span>
            </a>
          </h1>
        </div>

        <ul>
          <li>
            <a href="/books">Todos los libros</a>
          </li>
          <li>
            <a href="/authors">Todos los autores</a>
          </li>
        </ul>

        <div className="nav-side right">
          <a href="">Ingresar</a>
        </div>
      </nav>
    </>
  );
}

import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Authors from "./pages/Authors";
import NewBook from "./pages/NewBook";
import NewAuthor from "./pages/NewAuthor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/agregar-libro" element={<NewBook />} />
          <Route path="/agregar-autor" element={<NewAuthor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

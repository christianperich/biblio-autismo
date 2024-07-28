import "../css/Book.css";

export default function Book({ book }) {
  return (
    <>
      <article className="book-cover">
        <a href={`books/${book._id}`}>
          <img src={book.cover} alt="" />
        </a>
      </article>
    </>
  );
}

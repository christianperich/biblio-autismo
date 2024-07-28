import LastFive from "../components/LastFive";

export default function MainPage() {
  return (
    <>
      <img src="/img/landing.png" alt="landing" className="landing" />
      <div className="container">
        <LastFive />
        <h2>Libros más descargados</h2>
        <h2>Libros técnicos</h2>
      </div>
    </>
  );
}

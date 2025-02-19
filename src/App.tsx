import CardList from "./components/CardList";
import Shoes from "./data/shoes.json";

export default function App() {
  return (
    <>
      <header>
        <h1>NIKE AIR MAX</h1>
      </header>

      <main>
        <section className="card-list">
          <CardList data={Shoes} />
        </section>
      </main>

      <footer>
        <p>© 2024 - Alan Bart</p>
      </footer>
    </>
  );
}

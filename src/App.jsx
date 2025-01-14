import CardList from "./components/CardList";
import { shoes } from "./data/shoes";

export default function App() {
  return (
    <>
      <header>
        <h1>NIKE AIR MAX</h1>
      </header>

      <main>
        <section className="card-list">
          <CardList data={shoes} />
        </section>
      </main>

      <footer>
        <p>© 2024 - Alan Bart</p>
      </footer>
    </>
  );
}

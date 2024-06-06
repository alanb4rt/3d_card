import Card from "./components/CardList";
import { data } from "./utils/data";

export default function App() {
  return (
    <>
      <header>
        <h1>NIKE AIR MAX</h1>
      </header>

      <main>
        <section className="card-list">
          <Card data={data} />
        </section>
      </main>

      <footer>
        <p>© 2024 - Alan Bart</p>
      </footer>
    </>
  );
}

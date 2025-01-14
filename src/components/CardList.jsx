import Card from "./Card";
import { mouseMove, mouseOut } from "../utils/interactive-mouse";

export default function CardList({ data }) {
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          onMouseMove={mouseMove}
          onMouseOut={mouseOut}
        />
      ))}
    </>
  );
}

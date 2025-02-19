import Card from "./Card";
import { ShoesType } from "../types/shoes";

interface CardListProps {
  data: ShoesType[];
}
export default function CardList({ data }: CardListProps) {
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
}

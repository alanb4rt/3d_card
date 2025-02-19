import { useCallback, useRef } from "react";
import { getImageURL } from "../utils/getImageURL";
import { mouseMove, mouseOut } from "../utils/interactive-mouse";
import { ShoesType } from "../types/shoes";

interface CardProps {
  item: ShoesType;
}

export default function Card({ item }: CardProps) {
  const { name, color, image } = item;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      mouseMove(e, cardRef);
  }, [cardRef]);

  const handleMouseOut = useCallback(() => {
      mouseOut(cardRef);
  }, [cardRef]);

  return (
    <div
      ref={cardRef}
      className="card"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <h2 className="name">Air Max {name}</h2>
      <div className="product">
        <div className="circle" style={{ background: `${color}` }}></div>
        <img src={getImageURL(image)} alt={`shoes ${name}`} loading="lazy" />
      </div>
      <a className="btn" href="" style={{ background: `${color}` }}>
        Buy now
      </a>
    </div>
  );
}

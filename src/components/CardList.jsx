import { useRef } from "react";

export function Card({ item, onMouseMove, onMouseOut }) {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="card"
      onMouseMove={(e) => onMouseMove(e, cardRef)}
      onMouseOut={() => onMouseOut(cardRef)}
    >
      <h2 className="name">Air Max {item.name}</h2>
      <div className="product">
        <div className="circle" style={{ background: `${item.color}` }}></div>
        <img src={`./src/assets/${item.img}`} alt={`shoes ${item.name}`} />
      </div>
      <a className="btn" href="" style={{ background: `${item.color}` }}>
        Buy now
      </a>
    </div>
  );
}

export default function CardList({ data }) {
  const mouseMove = (event, cardRef) => {
    const cardRect = cardRef.current.getBoundingClientRect();

    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;

    const offsetX = ((event.clientX - centerX) / cardRect.width) * 45;
    const offsetY = ((event.clientY - centerY) / cardRect.height) * 45;

    cardRef.current.style.setProperty("--rotateX", offsetY + "deg");
    cardRef.current.style.setProperty("--rotateY", -1 * offsetX + "deg");
  };

  const mouseOut = (cardRef) => cardRef.current.removeAttribute("style");

  return data.map((item) => (
    <Card
      key={item.id}
      item={item}
      onMouseMove={mouseMove}
      onMouseOut={mouseOut}
    />
  ));
}

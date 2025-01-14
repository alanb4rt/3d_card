import { useRef } from "react";
import { getImageURL } from "../utils/getImageURL";

export default function Card({ item, onMouseMove, onMouseOut }) {
  const { name, color, img } = item;
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="card"
      onMouseMove={(e) => onMouseMove(e, cardRef)}
      onMouseOut={() => onMouseOut(cardRef)}
    >
      <h2 className="name">Air Max {name}</h2>
      <div className="product">
        <div className="circle" style={{ background: `${color}` }}></div>
        <img src={getImageURL(img)} alt={`shoes ${name}`} />
      </div>
      <a className="btn" href="" style={{ background: `${color}` }}>
        Buy now
      </a>
    </div>
  );
}

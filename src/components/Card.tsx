import type { Data } from "../ProvidersList";
import "./Card.css";
import img from "../assets/star.webp";

type CardProps = {
  data: Data;
};
export default function Card({ data }: CardProps) {
  const { name, specialization, location, rating } = data;
  return (
    <>
      <div
        style={{
          borderRadius: "5px",
          padding: "5px",
        }}
        className="card"
      >
        <h4>{name}</h4>
        <p>{specialization}</p>
        <p>{location}</p>
        <div className="rating">
          <img
            src={img}
            width="20px"
            height="20px"
            style={{ marginRight: "5px" }}
          />
          <p>{rating}</p>
        </div>
      </div>
    </>
  );
}

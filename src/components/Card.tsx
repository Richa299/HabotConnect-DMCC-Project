import type { Data } from "../ProvidersList";
import "./Card.css";

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
        <p>{name}</p>
        <p>{specialization}</p>
        <p>{location}</p>
        <p>{rating}</p>
      </div>
    </>
  );
}

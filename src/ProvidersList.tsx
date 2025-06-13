import { useEffect, useState } from "react";
import Card from "./components/Card";

export type Data = {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialization: string;
};

export default function ProvidersList() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        fetch("./data.json")
          .then((res) => res.json())
          .then((data) => {
            setData(data), setLoading(false);
          });
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 style={{ color: "#e6a042" }}>
            Learning Support Provider Directory Module
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              columnGap: "25px",
              rowGap: "15px",
              padding: "20px",
            }}
          >
            {data?.map((item) => {
              return <Card data={item} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

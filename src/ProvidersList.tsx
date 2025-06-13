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
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const filteredValues = data.filter((item) => item?.name.includes(value));
    setFilteredData(filteredValues);
  };

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        fetch("./data.json")
          .then((res) => res.json())
          .then((data) => {
            setData(data), setFilteredData(data), setLoading(false);
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
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Search"
            style={{ width: "200px", height: "20px" }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))",
              justifyContent: "center",
              columnGap: "25px",
              rowGap: "15px",
              padding: "20px",
            }}
          >
            {filteredData?.map((item) => {
              return <Card data={item} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

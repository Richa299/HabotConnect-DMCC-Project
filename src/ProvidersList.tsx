import { useEffect, useState, useCallback } from "react";
import Card from "./components/Card";
import { Link } from "react-router-dom";

export type Data = {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialization: string;
};
function debounce(fn: any, delay: number) {
  let timer: number;
  return function (value: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(value);
    }, delay);
  };
}

export default function ProvidersList() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [input, setInput] = useState("");

  const filteredValue = useCallback(
    debounce((input: string) => {
      const arr = data.filter((item) =>
        item?.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredData(arr);
    }, 500),
    [data]
  );

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    filteredValue(value);
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
              return (
                <Link
                  to={`/providers/${item?.id}`}
                  state={{ item }}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Card data={item} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

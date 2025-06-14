import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { Data } from "./ProvidersList";

import img from "./assets/star.webp";
import "./ProviderDetails.css";

export default function ProviderDetails() {
  const { id } = useParams();
  const [detail, setDetail] = useState<Data[]>([]);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDetail(data.filter((item: any) => item.id == id)));
  }, []);
  return (
    <div className="providerDetail">
      <div className="providerDetail_card">
        <div className="providerDetail_card_inner">
          <h3>{detail[0]?.name}</h3>
          <p>{detail[0]?.specialization}</p>
          <p>{detail[0]?.location}</p>
          <div className="rating">
            <img
              src={img}
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            <p>{detail[0]?.rating}</p>
          </div>
          <p style={{ fontSize: "16px" }}>{detail[0]?.longDescription}</p>
          <hr />
          <h4>Contact Detail[0]s</h4>
          <div>
            <p>{detail[0]?.contactEmail}</p>
            <p>{detail[0]?.phoneNumber}</p>
          </div>

          <button onClick={handleButtonClick}>Back to list</button>
        </div>
      </div>
    </div>
  );
}

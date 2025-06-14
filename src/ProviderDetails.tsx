import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { Data } from "./ProvidersList";

import img from "./assets/star.webp";
import "./ProviderDetails.css";

export default function ProviderDetails() {
  const { id } = useParams();
  const [providerDetail, setProviderDetail] = useState<Data[]>([]);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setProviderDetail(data.filter((item: any) => item.id == id))
      );
  }, []);

  return providerDetail.length > 0 ? (
    <div className="providerDetail">
      <div className="providerDetail_card">
        <div className="providerDetail_card_inner">
          <h3>{providerDetail[0]?.name}</h3>
          <p>{providerDetail[0]?.specialization}</p>
          <p>{providerDetail[0]?.location}</p>
          <div className="rating">
            <img
              src={img}
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            <p>{providerDetail[0]?.rating}</p>
          </div>
          <p style={{ fontSize: "14px" }}>
            {providerDetail[0]?.longDescription}
          </p>
          <hr />
          <h4>Contact Details</h4>
          <div>
            <p>{providerDetail[0]?.contactEmail}</p>
            <p>{providerDetail[0]?.phoneNumber}</p>
          </div>

          <button onClick={handleButtonClick}>Back to list</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="error">Provider does not exist !</div>
  );
}

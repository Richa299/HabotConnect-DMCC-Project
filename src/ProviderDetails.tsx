import { useLocation, useNavigate } from "react-router-dom";
import img from "./assets/star.webp";
import "./ProviderDetails.css";

export default function ProviderDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className="providerDetail">
      <div className="providerDetail_card">
        <div className="providerDetail_card_inner">
          <h3>{state.item?.name}</h3>
          <p>{state.item.specialization}</p>
          <p>{state.item.location}</p>
          <div className="rating">
            <img
              src={img}
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            <p>{state.item.rating}</p>
          </div>
          <p style={{ fontSize: "16px" }}>{state.item.longDescription}</p>
          <hr />
          <h4>Contact Details</h4>
          <div>
            <p>{state.item.contactEmail}</p>
            <p>{state.item.phoneNumber}</p>
          </div>

          <button onClick={handleButtonClick}>Back to list</button>
        </div>
      </div>
    </div>
  );
}

import { useLocation, useNavigate } from "react-router-dom";
import img from "./assets/star.webp";

export default function ProviderDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };
  return (
    <div
      style={{
        backgroundColor: "#1b1919",
        margin: 0,
        padding: "20px",
        height: "90vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "beige",
            width: "500px",
            height: "500px",
            borderRadius: "5px",
          }}
        >
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
          </div>
          <p>{state.item.rating}</p>
          <p style={{ fontSize: "16px" }}>{state.item.longDescription}</p>
          <p>Contact Details</p>
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

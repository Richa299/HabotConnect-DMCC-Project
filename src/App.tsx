import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProvidersList from "./ProvidersList";
import ProviderDetails from "./ProviderDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/providers" replace />} />
          <Route path="/providers" element={<ProvidersList />} />
          <Route path="/providers/:id" element={<ProviderDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

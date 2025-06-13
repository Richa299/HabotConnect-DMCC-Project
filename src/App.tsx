import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProvidersList from "./ProvidersList";
import ProviderDetails from "./ProviderDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/providers" element={<ProvidersList />} />
          <Route path="/providers/:id" element={<ProviderDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

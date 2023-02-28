import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Solution from "./Solution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="solution" element={<Solution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

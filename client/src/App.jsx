import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Americas" element={<Stats region="Americas" />} />
      <Route path="Europe" element={<Stats region="Europe" />} />
      <Route path="Asia" element={<Stats region="Asia" />} />
    </Routes>
  );
}

export default App;

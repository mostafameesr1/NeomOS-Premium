import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ROMPage from "./pages/ROMPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rom/:id" element={<ROMPage />} />
      </Routes>
    </Router>
  );
}

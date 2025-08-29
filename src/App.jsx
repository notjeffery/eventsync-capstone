import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InterestPage from "./pages/InterestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InterestPage />} /> 
        <Route path="/interests" element={<InterestPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;

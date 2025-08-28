import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import InterestPage from "./pages/InterestPage";
import FeedPage from "./pages/FeedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/interests" element={<InterestPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import InterestPage from "./pages/InterestPage.jsx";
import FeedPage from "./pages/FeedPage.jsx"; // ✅ explicit .jsx import

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InterestPage />} />
        <Route path="/feed" element={<FeedPage />} />
        {/* if someone hits an unknown route, send them to /feed for now */}
        <Route path="*" element={<Navigate to="/feed" replace />} />
      </Routes>
    </Router>
  );
}

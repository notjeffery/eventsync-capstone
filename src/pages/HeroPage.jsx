import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroPage.css";

const HeroPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/interests");
  };

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].screenY;
      if (touchStartY - touchEndY > 100) {
        // user swiped up
        navigate("/interests");
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);

  return (
    <div className="hero-container">
      {/* Mesh Gradient Blobs */}
      <div className="blob blob-top-left"></div>
      <div className="blob blob-bottom-right"></div>

      {/* Brand Name */}
      <h1 className="hero-title">EVENTSYNC</h1>

      {/* SVG Image */}
      <img src="/handshake.svg" alt="Handshake" className="hero-image" />

      {/* CTA Button */}
      <button className="get-started-btn" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default HeroPage;

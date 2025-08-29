import { useState } from "react";
import { motion } from "framer-motion";
import "./InterestPage.css";

const InterestPage = () => {
  const [selectedTab, setSelectedTab] = useState("Artistes"); // default tab
  const [selectedInterests, setSelectedInterests] = useState([]);

  const artistes = ["Wizkid", "Asake", "Roddy Ricch", "Rodwave", "Fola", "ODUMODUBLVCK", "Seyi Vibez", "Drake", "Future", "Tems", "Davido", "Burna Boy"];
  const categories = ["Concerts", "Festivals", "Conferences", "Workshops", "Parties", "Meetups", "Art", "Football", "Album Listenings", "Rave", "Block Party", "Movies"];

  const handleToggle = (item) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const interestsToDisplay = selectedTab === "Artistes" ? artistes : categories;

  return (
    <div className="interest-container">
      <h2 className="title">Pick your interests</h2>
      <p className="subtitle">
        Select {selectedTab.toLowerCase()} you love. We’ll tailor your feed just for you.
      </p>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "Artistes" ? "active" : ""}`}
          onClick={() => setSelectedTab("Artistes")}
        >
          Artistes
        </button>
        <button
          className={`tab ${selectedTab === "Event Categories" ? "active" : ""}`}
          onClick={() => setSelectedTab("Event Categories")}
        >
          Event Categories
        </button>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder={`Search ${selectedTab.toLowerCase()}...`}
        className="search-bar"
      />

      {/* Cards */}
      <motion.div
        layout
        className="cards-container"
      >
        {interestsToDisplay.map((item, index) => (
          <motion.div
            key={item}
            layout
            whileTap={{ scale: 0.95 }}
            onClick={() => handleToggle(item)}
            className={`card ${selectedInterests.includes(item) ? "selected" : ""}`}
            style={{ zIndex: interestsToDisplay.length - index }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation buttons */}
      <div className="navigation">
        <button className="skip-btn">Skip &gt;&gt;</button>
        <button
          className={`next-btn ${selectedInterests.length > 0 ? "highlight" : ""}`}
          onClick={() => alert("Proceeding to feed...")}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default InterestPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  "Music", "Sports", "Technology", "Art",
  "Food", "Fashion", "Movies", "Travel",
];

export default function InterestsPage() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggle = (interest) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Select your interests
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((interest) => {
            const active = selected.includes(interest);
            return (
              <button
                key={interest}
                onClick={() => toggle(interest)}
                className={`p-4 rounded-xl border-2 font-medium transition ${
                  active
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white border-gray-300"
                }`}
                aria-pressed={active}
              >
                {interest}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => navigate("/feed", { state: { interests: selected } })}
          className="mt-8 w-full px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition disabled:opacity-50"
          disabled={selected.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

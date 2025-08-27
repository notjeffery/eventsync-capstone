import { useNavigate } from "react-router-dom";

export default function HeroPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-600 text-white">
      <div className="flex flex-col items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-sm">
          EVENTSYNC
        </h1>

        <img
          src="/assets/handshake.svg"
          alt="Two people shaking hands"
          className="w-48 h-48 mt-8"
        />

        <button
          onClick={() => navigate("/interests")}
          className="mt-10 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

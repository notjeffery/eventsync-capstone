import { useNavigate } from "react-router-dom";

const OnboardingPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/interest");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to EventSync 🎉</h1>
      <p className="text-lg mb-6 text-center px-6">
        Discover events near you, follow your favorite artists, and plan with friends.
      </p>
      <button
        onClick={handleNext}
        className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default OnboardingPage;

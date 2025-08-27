import { useLocation, Link } from "react-router-dom";

export default function FeedPage() {
  const { state } = useLocation();
  const interests = state?.interests ?? [];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Your Feed</h1>
        {interests.length > 0 ? (
          <p className="mt-2">
            Showing sample results for:{" "}
            <span className="font-semibold">{interests.join(", ")}</span>
          </p>
        ) : (
          <p className="mt-2">No interests selected yet.</p>
        )}

        <div className="mt-6">
          <Link to="/interests" className="text-indigo-600 underline">
            Change interests
          </Link>
        </div>

        <div className="mt-10 border rounded-xl p-6">
          <p className="text-gray-600">
            Placeholder feed. We’ll populate this with mock data next.
          </p>
        </div>
      </div>
    </div>
  );
}

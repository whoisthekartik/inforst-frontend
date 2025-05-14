import { useState } from "react";
import axios from "axios";

export default function StartGame({ onGameStart }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startGame = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/player/start");
      onGameStart(response.data); // Pass player data to parent
    } catch (err) {
      setError("Failed to start game.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Inforst</h1>
      <button
        onClick={startGame}
        className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Starting..." : "Start Game"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
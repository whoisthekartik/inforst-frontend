import { useEffect, useState } from "react";
import axios from "axios";

const TeamViewer = ({ userId }) => {
  const [team, setTeam] = useState([]);

<li key={i} className="p-2 border rounded">
  <strong>{p.name}</strong> (Level {p.level || 1})<br />
  XP: {p.xp || 0}
</li>

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await axios.post("/api/player/team", { userId });
      setTeam(res.data.team);
    };

    fetchTeam();
  }, [userId]);

  return (
    <div className="p-4 border rounded bg-white mt-4">
      <h2 className="text-xl font-bold mb-2">Your Team</h2>
      {team.length === 0 ? (
        <p>No Pokémon yet.</p>
      ) : (
        <ul className="space-y-2">
          {team.map((p, i) => (
            <li key={i} className="p-2 border rounded">
              <strong>{p.name}</strong> (Level {p.level || 1})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamViewer;
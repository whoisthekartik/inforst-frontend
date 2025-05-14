const [inBattle, setInBattle] = useState(false);
const [enemy, setEnemy] = useState(null);
const move = async (direction) => {
  setLoading(true);
  try {
    const res = await axios.post("/api/player/move", {
      direction,
      userId: player.userId || "test-user",
    });
    setPlayer(res.data.player);

    const eventRes = await axios.post("/api/player/check-event", {
      userId: res.data.player.userId,
    });
<button
  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
  onClick={() => {
    // Simple damage logic
    const damage = Math.floor(Math.random() * 20) + 10; // 10–30 damage
    const newHp = enemy.hp - damage;

    if (newHp <= 0) {
      alert(You defeated ${enemy.name}!);
      setInBattle(false);
      setEnemy(null);
      // TODO: Award XP to player
    } else {
      setEnemy({ ...enemy, hp: newHp });
      alert(You hit ${enemy.name} for ${damage} damage!);
    }
  }}
>
  Attack
</button>
    if (eventRes.data.triggered) {
      if (eventRes.data.type === "dialogue") {
        alert(eventRes.data.text);
      } else if (eventRes.data.type === "shop") {
        alert("You've entered a shop!");
      } else if (eventRes.data.type === "battle") {
        setEnemy(eventRes.data.enemy);
        setInBattle(true);
      }
    }
  } catch (err) {
    console.error("Move error", err);
  }
  setLoading(false);
};
import TeamViewer from "./TeamViewer";
{player.pokemons && player.pokemons.length > 0 && (
  <div className="mt-4 p-2 border rounded bg-white w-full max-w-sm">
    <h2 className="text-lg font-bold mb-2">Your Pokémon</h2>
    {player.pokemons.map((p, idx) => (
      <div key={idx} className="mb-1">
        <strong>{p.name}</strong> - Level {p.level}, HP: {p.hp}
      </div>
    ))}
  </div>
)}
const healTeam = async () => {
  try {
    const res = await axios.post("/api/player/heal", { userId: player.userId });
    alert(res.data.message);
    setPlayer(res.data.player);
  } catch (err) {
    console.error("Healing error", err);
  }
};

// ...inside your return statement
<TeamViewer userId={player.userId || "test-user"} />
if (enemyHp <= 0) {
  alert(You defeated ${enemy.name}!);

  // Ask if player wants to catch it
  const shouldCatch = confirm(Do you want to catch ${enemy.name}?);

  if (shouldCatch) {
    const catchRes = await axios.post("/api/player/catch", {
      userId: player.userId,
      pokemon: enemy
    });

    alert(${enemy.name} has been added to your team!);
  }

  break;
}
else if (eventRes.data.type === "battle") {
  let enemy = eventRes.data.enemy;
  let playerHp = 30;
  let enemyHp = enemy.hp;

  while (playerHp > 0 && enemyHp > 0) {
    // Player attacks
    enemyHp -= 10;

    if (enemyHp <= 0) {
      alert(You defeated ${enemy.name}!);
      break;
    }

    // Enemy attacks
    playerHp -= enemy.attack;

    if (playerHp <= 0) {
      alert(You were defeated by ${enemy.name}...);
      break;
    }
  }
}
const move = async (direction) => {
  setLoading(true);
  try {
    const res = await axios.post("/api/player/move", {
      direction,
      userId: player.userId || "test-user",
    });
    setPlayer(res.data.player);

    // After moving, check for event
    const eventRes = await axios.post("/api/player/check-event", {
      userId: res.data.player.userId,
    });

    if (eventRes.data.triggered) {
      if (eventRes.data.type === "dialogue") {
        alert(eventRes.data.text);
      } else if (eventRes.data.type === "shop") {
        alert("You've entered a shop! (Shop system coming soon)");
      }
    }
  } catch (err) {
    console.error("Move error", err);
  }
  setLoading(false);
};

import axios from "axios";
import { useState } from "react";

export default function GameView({ player: initialPlayer }) {
  const [player, setPlayer] = useState(initialPlayer);
  const [loading, setLoading] = useState(false);

  const move = async (direction) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/player/move", {
        direction,
        userId: player.userId || "test-user",
      });
      setPlayer(res.data.player);
    } catch (err) {
      console.error("Move error", err);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Map: {player.currentMap}</h2>
      <p>Position: ({player.position.x}, {player.position.y})</p>

      <div className="mt-6 space-y-2">
        <div className="flex justify-center">
          <button onClick={() => move("up")} className="btn">↑</button>
        </div>
        <div className="flex justify-center space-x-2">
          <button onClick={() => move("left")} className="btn">←</button>
          <button onClick={() => move("down")} className="btn">↓</button>
          <button onClick={() => move("right")} className="btn">→</button>
        </div>
      </div>

      <style jsx>{
        .btn {
          background: #1f2937;
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 0.5rem;
          font-size: 1.5rem;
          transition: background 0.2s;
        }
        .btn:hover {
          background: #374151;
        }
      }</style>
    </div>
  );
}export default function GameView({ player }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Inforst Game Started</h2>
      <p>Welcome, trainer!</p>
      <p>Current Location: {player.currentMap}</p>
      <p>Position: ({player.position.x}, {player.position.y})</p>

      {/* TODO: Add movement, events, and battle components */}
    </div>
  );
}

else if (eventRes.data.type === "battle") {
  setEnemy(eventRes.data.enemy);
  setInBattle(true);
}
if (eventRes.data.triggered) {
  if (eventRes.data.type === "dialogue") {
    alert(eventRes.data.text);
  } else if (eventRes.data.type === "shop") {
    alert("You've entered a shop!");
  } else if (eventRes.data.type === "battle") {
    setEnemy(eventRes.data.enemy);
    setInBattle(true);
  }
}
{inBattle && enemy && (
  <div className="p-4 border rounded bg-white mt-4">
    <h2>Battle Started!</h2>
    <p>Enemy: {enemy.name}</p>
    <p>Level: {enemy.level}</p>
    <p>HP: {enemy.hp}</p>

    <button
      className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
      onClick={() => {
        alert(You attacked ${enemy.name}! (Real battle logic coming next));
        setInBattle(false); // remove this line later for real battles
      }}
    >
      Attack
    </button>
  </div>
)}
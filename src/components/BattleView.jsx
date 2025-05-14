import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BattleView = ({ player, enemy, setInBattle, setEnemy }) => {
  const [loading, setLoading] = useState(false);

  const handleAttack = async () => {
    setLoading(true);
    try {
      const damage = Math.floor(Math.random() * 20) + 10; // 10–30 damage
      const newHp = enemy.hp - damage;

      if (newHp <= 0) {
        alert(You defeated ${enemy.name}!);
        setInBattle(false);
        setEnemy(null);

        // Award XP here
        const xpAmount = 50; // Adjust the XP amount as necessary
        const res = await axios.post('/api/player/award-xp', {
          userId: player.userId,  // Assuming player is in state
          xpAmount
        });

        console.log(You now have ${res.data.xp} XP!); // Log XP
      } else {
        setEnemy({ ...enemy, hp: newHp });
        alert(You hit ${enemy.name} for ${damage} damage!);
      }
    } catch (err) {
      console.error("Battle error", err);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded bg-white mt-4">
      <h2>Battle Started!</h2>
      <p>Enemy: {enemy.name}</p>
      <p>Level: {enemy.level}</p>
      <p>HP: {enemy.hp}</p>

      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleAttack}
        disabled={loading}
      >
        {loading ? 'Attacking...' : 'Attack'}
      </button>
    </div>
  );
};

export default BattleView;
import React, { useState } from 'react';
const [playerHP, setPlayerHP] = useState(100);
const [enemyHP, setEnemyHP] = useState(null); // will be set on startBattle

const startBattle = (enemyData) => {
  setEnemy(enemyData);
  setEnemyHP(enemyData.health || 100);
  setPlayerHP(100); // reset player HP
  setInBattle(true);
};

const BattleScreen = ({ enemy, onBattleEnd }) => {
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(enemy.hp);

  const handleAttack = () => {
    const playerDamage = Math.floor(Math.random() * 20) + 5;
    const enemyDamage = Math.floor(Math.random() * 15) + 5;

    setEnemyHP(prev => Math.max(prev - playerDamage, 0));
    setPlayerHP(prev => Math.max(prev - enemyDamage, 0));
  };

  const handleBattleEnd = () => {
    const result = playerHP <= 0 ? 'lost' : 'won';
    onBattleEnd(result);
  };

  if (playerHP <= 0 || enemyHP <= 0) {
    setTimeout(handleBattleEnd, 1000);
  }

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h2 className="text-xl mb-4">Battle: You vs {enemy.name}</h2>
      <div className="mb-2">Your HP: {playerHP}</div>
      <div className="mb-2">{enemy.name} HP: {enemyHP}</div>
      <button
        onClick={handleAttack}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        disabled={playerHP <= 0 || enemyHP <= 0}
      >
        Attack
      </button>
    </div>
  );
};

export default BattleScreen;
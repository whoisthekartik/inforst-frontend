const handleBattle = async () => {
  const damageToEnemy = Math.floor(Math.random() * 20) + 10;
  const newEnemyHp = enemy.hp - damageToEnemy;

  if (newEnemyHp <= 0) {
    alert(You defeated ${enemy.name}!);
    setInBattle(false);
    setEnemy(null);

    // Heal Pokémon after battle
    setPlayerPokemon(prev => ({ ...prev, hp: 100 }));

    // Award XP
    const xpAmount = 50;
    const res = await axios.post('/api/player/award-xp', {
      userId: player.userId,
      xpAmount,
    });

    console.log(You now have ${res.data.xp} XP!);
  } else {
    const damageToPlayer = Math.floor(Math.random() * 15) + 5;
    const newPlayerHp = playerPokemon.hp - damageToPlayer;

    setEnemy({ ...enemy, hp: newEnemyHp });
    setPlayerPokemon({ ...playerPokemon, hp: newPlayerHp });

    alert(You hit ${enemy.name} for ${damageToEnemy} damage!);
    alert(${enemy.name} hit you back for ${damageToPlayer} damage!);

    if (newPlayerHp <= 0) {
      alert(Your ${playerPokemon.name} fainted!);
      setInBattle(false);
    }
  }
};
const BattleScreen = () => {
  const { enemy, enemyHP, setEnemyHP, playerHP, setPlayerHP, endBattle } = useBattle();


alert(You defeated ${enemy.name}!);
battleWinCallback(); // reward or complete quest
endBattle();

  const handleAttack = () => {
    const playerDamage = Math.floor(Math.random() * 20) + 5;
    const newEnemyHP = Math.max(enemyHP - playerDamage, 0);
    setEnemyHP(newEnemyHP);

    if (newEnemyHP <= 0) {
      alert(You defeated ${enemy.name}!);
      endBattle();
      return;
    }

    // Enemy attacks back
    setTimeout(() => {
      const enemyDamage = Math.floor(Math.random() * 15) + 5;
      const newPlayerHP = Math.max(playerHP - enemyDamage, 0);
      setPlayerHP(newPlayerHP);

      if (newPlayerHP <= 0) {
        alert("You lost the battle!");
        endBattle();
      }
    }, 500);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white p-4 z-50">
      <h2>Battle with {enemy.name}</h2>
      <p>Enemy HP: {enemyHP}</p>
      <p>Your HP: {playerHP}</p>
      <button onClick={handleAttack} className="mt-4 bg-red-500 px-4 py-2">Attack</button>
    </div>
  );
};
import React, { useState } from 'react';

const BattleScreen = () => {
  const { enemy, enemyHP, setEnemyHP, playerHP, setPlayerHP, endBattle } = useBattle();

  const handleAttack = () => {
    const player
Damage = Math.floor(Math.random() * 20) + 5;
    const newEnemyHP = Math.max(enemyHP - playerDamage, 0);
    setEnemyHP(newEnemyHP);

    if (newEnemyHP <= 0) {
      alert(You defeated ${enemy.name}!);
      endBattle();
      return;
    }

    // Enemy attacks back
    setTimeout(() => {
      const enemyDamage = Math.floor(Math.random() * 15) + 5;
      const newPlayerHP = Math.max(playerHP - enemyDamage, 0);
      setPlayerHP(newPlayerHP);

      if (newPlayerHP <= 0) {
        alert("You lost the battle!");
        endBattle();
      }
    }, 500);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white p-4 z-50">
      <h2>Battle with {enemy.name}</h2>
      <p>Enemy HP: {enemyHP}</p>
      <p>Your HP: {playerHP}</p>
      <button onClick={handleAttack} className="mt-4 bg-red-500 px-4 py-2">Attack</button>
    </div>
  );
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
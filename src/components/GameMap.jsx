setBattleLog(prev => [...prev, You defeated ${enemy.name}!]);
setBattleLog(prev => [
  ...prev,
  You hit ${enemy.name} for ${damageToEnemy} damage!,
  ${enemy.name} hit you back for ${damageToPlayer} damage!
]);
<div className="mt-4 bg-gray-100 p-2 rounded">
  <h3>Battle Log:</h3>
  <ul className="list-disc pl-5 text-sm">
    {battleLog.map((log, idx) => (
      <li key={idx}>{log}</li>
    ))}
  </ul>
</div>
// At the top of your battle component
const [battleLog, setBattleLog] = useState([]);// Frontend component to check for events after movement
const movePlayer = async (direction) => {
  const newPosition = { ...playerLocation };
if (eventRes.data.triggered && eventRes.data.type === 'wild') {
  const enemy = eventRes.data.enemy; // From backend
  setEnemy(enemy);
  setInBattle(true);
}
const [playerPokemon, setPlayerPokemon] = useState({
  name: 'Charmander',
  level: 5,
  hp: 100,
});
<h3>Your Pokémon: {playerPokemon.name}</h3>
<p>HP: {playerPokemon.hp}</p>
{!inBattle && playerPokemon && (
  <button
    className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
    onClick={() => {
      const maxHp = 100 + (playerPokemon.level - 1) * 20; // Adjust max HP logic if needed
      setPlayerPokemon({ ...playerPokemon, hp: maxHp });
      alert(${playerPokemon.name} is fully healed!);
    }}
  >
    Heal Pokémon
  </button>
)}
onClick={async () => {
  const damageToEnemy = Math.floor(Math.random() * 20) + 10;
  const newEnemyHp = enemy.hp - damageToEnemy;

  if (newEnemyHp <= 0) {
    alert(You defeated ${enemy.name}!);
    setInBattle(false);
    setEnemy(null);

    // Award XP
    const xpAmount = 50;
    const res = await axios.post('/api/player/award-xp', {
      userId: player.userId,
      xpAmount,
    });

    console.log(You now have ${res.data.xp} XP!);
  } else {
    // Enemy attacks back
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
}}
  // Update the position based on direction
  if (direction === 'up') newPosition.y -= 1;
  if (direction === 'down') newPosition.y += 1;
  if (direction === 'left') newPosition.x -= 1;
  if (direction === 'right') newPosition.x += 1;

  try {
    // Update location in the backend
    const res = await axios.post(/api/player/update-location, {
      userId: userId,
      newLocation: newPosition,
    });

    // Update state to reflect new location
    setPlayerLocation(res.data.newLocation);

    // Check for event at the new location
    const eventRes = await axios.post('/api/player/check-event', {
      userId,
    });

    if (eventRes.data.triggered) {
      // Handle event here, e.g., battle, dialogue, shop
    }
  } catch (error) {
    console.error("Error updating location:", error);
  }
const renderMap = () => {
  const mapGrid = [];

  for (let y = 0; y < mapGrid.length; y++) {
    for (let x = 0; x < mapGrid[y].length; x++) {
      mapGrid.push(
        <div
          key={${x}-${y}}
          className={tile ${mapGrid[y][x]}} // Apply class based on the tile type
          onClick={() => movePlayer('right')} // Handle movement based on clicked tile
        >
          {playerLocation.x === x && playerLocation.y === y && <span>Player</span>}
        </div>
      );
    }
  }

  return mapGrid;
};
};
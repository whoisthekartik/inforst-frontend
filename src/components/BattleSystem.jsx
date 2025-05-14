const startBattle = async () => {
  // Generate enemy Pokémon or NPC for battle
  const enemy = { name: 'Wild Pikachu', level: 5, hp: 50 };

  // Start the battle
  setInBattle(true);
  setEnemy(enemy);
};
import NPCInteraction from '../components/interactions/NPCInteraction';

const GameScreen = () => {
  return (
    <div className="game-screen">
      {/* Your game map rendering */}
      {/* Place NPCInteraction wherever the NPC is on screen */}
      <div className="npc-area absolute top-[100px] left-[200px]">
        <NPCInteraction />
      </div>
    </div>
  );
};

import { useBattle } from '../context/BattleContext';
import { useInventory } from '../context/InventoryContext';
import { useQuests } from '../context/QuestContext';

const NPCInteraction = () => {
  const { startBattle } = useBattle();
  const { addItem } = useInventory();
  const { completeQuest } = useQuests();

  const handleBattleStart = () => {
    const enemy = { name: 'Wild Pokémon', health: 100 };

    startBattle(enemy, () => {
      addItem("rare-candy");
      completeQuest("rescue_npc_1");
    });
  };

  return (
    <div className="npc-interaction">
      <button onClick={handleBattleStart}>Fight</button>
    </div>
  );
};

export default NPCInteraction;
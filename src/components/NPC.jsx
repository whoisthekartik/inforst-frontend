import { useState } from 'react';
import BattleScreen from './BattleScreen';

const NPC = () => {
  const [inBattle, setInBattle] = useState(false);

  if (inBattle) {
    return <BattleScreen enemyId="goblin" onBattleEnd={() => setInBattle(false)} />;
  }

  return (
    <div>
      <button onClick={() => setInBattle(true)}>Challenge to Battle</button>
    </div>
  );
};
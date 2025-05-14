import { usePlayer } from '../context/PlayerContext';

const PlayerHUD = () => {
  const { player } = usePlayer();
  const hpPercent = (player.hp / player.maxHp) * 100;
  const expPercent = player.exp % 100;

  return (
    <div className="bg-gray-900 text-white p-2 rounded-xl shadow w-64 space-y-2">
      <div className="text-xl font-bold">{player.name}</div>

      <div>
        <div className="text-sm">HP: {player.hp} / {player.maxHp}</div>
        <div className="h-2 bg-red-800 rounded">
          <div className="h-2 bg-green-400 rounded" style={{ width: ${hpPercent}% }} />
        </div>
      </div>

      <div>
        <div className="text-sm">EXP: {player.exp}</div>
        <div className="h-2 bg-gray-700 rounded">
          <div className="h-2 bg-blue-400 rounded" style={{ width: ${expPercent}% }} />
        </div>
      </div>

      <div className="text-sm">Items: {player.items.length}</div>
    </div>
  );
};

export default PlayerHUD;
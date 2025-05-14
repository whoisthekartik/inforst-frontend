import React from 'react';
import axios from 'axios';

const FactionSelect = ({ userId, onFactionChosen }) => {
  const handleFaction = async (faction) => {
    await axios.post('/api/player/set-faction', { userId, faction });
    onFactionChosen(faction);
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Choose Your Faction</h2>
      <button
        className="bg-red-500 text-white px-4 py-2 m-2 rounded"
        onClick={() => handleFaction('Infernos')}
      >
        Infernos
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
        onClick={() => handleFaction('Frostborn')}
      >
        Frostborn
      </button>
    </div>
  );
};

export default FactionSelect;
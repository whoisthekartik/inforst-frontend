.// src/components/Inventory.js
import React from 'react';
import { usePlayer } from '../context/PlayerContext';

const Inventory = () => {
  const { player } = usePlayer();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Inventory</h2>
      <ul>
        {player.inventory.length > 0 ? (
          player.inventory.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))
        ) : (
          <li>No items in inventory</li>
        )}
      </ul>
    </div>
  );
};

export default Inventory;
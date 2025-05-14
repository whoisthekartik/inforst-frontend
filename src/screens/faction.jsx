// src/screens/faction.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FactionSelect() {
  const navigate = useNavigate();

  const handleSelect = (faction) => {
    localStorage.setItem('faction', faction); // Save choice
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-red-500 text-white">
      <h1 className="text-4xl font-bold mb-8">Choose Your Faction</h1>
      <div className="flex gap-10">
        <button
          onClick={() => handleSelect('Frostborn')}
          className="bg-blue-700 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          The Frostborn
        </button>
        <button
          onClick={() => handleSelect('Infernos')}
          className="bg-red-700 px-6 py-3 rounded-lg hover:bg-red-800 transition"
        >
          The Infernos
        </button>
      </div>
    </div>
  );
}
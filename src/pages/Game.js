// src/pages/GameView.js
import React from 'react';
import NPC from '../components/NPC';
import Inventory from '../components/Inventory';
import React, { useState } from 'react';
import GameMap from '../components/GameMap';  // Import GameMap component

const Game = ({ userId }) => {
  return (
    <div>
      <h1>Welcome to the Game!</h1>
      <GameMap userId={userId} /> {/* Render GameMap component here */}
    </div>
  );
};

export default Game;
<QuestLog />

const GameView = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Inforst: Oasisreach</h1>
      <NPC npcId="npc1" />
      <Inventory />
    </div>
import Inventory from '../components/Inventory';

const GameView = () => (
  <div>
    <NPC npcId="npc1" />
    <Inventory />
  </div>
);
  );
};

export default GameView;
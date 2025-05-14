// src/pages/GameScreen.jsx
import React, { useState } from 'react';
import MapRenderer from '../components/MapRenderer';
import PlayerHUD from '../components/PlayerHUD';
import MovementControls from '../components/MovementControls';
import NPC from '../components/NPC'; // Assuming NPC is a separate component
import { useInventory } from '../context/InventoryContext';
import InventoryPanel from '../components/InventoryPanel';
import { useQuests } from '../context/QuestContext';
import { useEffect } from 'react';
import { usePlayer } from '../context/PlayerContext';
import { loadProgress } from '../utils/saveLoad';

const Game = () => {
  const { setPlayer } = usePlayer();

  useEffect(() => {
    const load = async () => {
      const saved = await loadProgress();
      if (saved) {
        setPlayer(saved);
      }
    };
    load();
  }, []);

  return (
    // Your game components here
  );
};

export default Game;

const { addQuest } = useQuests();

// Inside interaction logic
addQuest("rescue_npc_1");

function GameScreen() {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Other components like MapRenderer, MovementControls, HUD */}
      <InventoryPanel />
    </div>
  );
}

const { addItem } = useInventory();

// After a dialogue or interaction
addItem("potion");
function GameScreen() {
  const [selectedNPC, setSelectedNPC] = useState(null);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);

  // Sample NPC Dialogue (You can replace this with dynamic NPC data)
  const npcDialogue = [
    "Welcome to Oasisreach City!",
    "The desert's been harsh lately...",
    "What brings you here?"
  ];

  const npcChoices = [
    { text: "I want to help.", response: "That's great! The town needs you." },
    { text: "Just passing through.", response: "Stay safe out there, traveler." }
  ];

  return (
    <div className="relative w-full h-screen bg-black">
      <MapRenderer mapName="Map001" />
      <MovementControls />
      <PlayerHUD />
      <NPC 
        dialogue={npcDialogue} 
        choices={npcChoices} 
        setSelectedNPC={setSelectedNPC} 
        selectedNPC={selectedNPC}
      />
    </div>
  );
}

export default GameScreen;
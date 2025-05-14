// src/components/NPCInteraction.js
import React from 'react';
import { useQuest } from '../context/QuestContext';
import { usePlayer } from '../context/PlayerContext';

const NPCInteraction = () => {
  const { addItemToInventory } = usePlayer();
  const { quests, updateQuest } = useQuest();

  const handleChoice = (choice) => {
    if (choice === 'I want to help.') {
      addItemToInventory('Healing Potion');
      updateQuest(1, { herbs: 1 });  // Update quest progress
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p>Welcome to Oasisreach City! What brings you here?</p>
      <button onClick={() => handleChoice('I want to help.')}>I want to help.</button>
      <button onClick={() => handleChoice('Just passing through.')}>Just passing through.</button>
    </div>
  );
};

export default NPCInteraction;
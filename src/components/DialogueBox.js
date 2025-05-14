import React, { useState } from 'react';
import { usePlayer } from '../context/PlayerContext';

const DialogueBox = ({ dialogueData, onEnd }) => {
  const [index, setIndex] = useState(0);
  const { addItemToInventory } = usePlayer();

  const dialogue = dialogueData.dialogue[index];

  const handleChoice = (choice) => {
    if (choice.giveItem) addItemToInventory(choice.giveItem);
    if (choice.end) {
      onEnd();
    } else {
      setIndex(choice.next);
    }
  };

  if (!dialogue) return null;

  return (
    <div className="bg-white p-4 rounded shadow max-w-md mx-auto mt-4">
      <p className="mb-2">{dialogue.text}</p>

      {dialogue.choices ? (
        <div className="flex flex-col gap-2">
          {dialogue.choices.map((choice, i) => (
            <button
              key={i}
              className="bg-blue-500 text-white py-1 px-2 rounded"
              onClick={() => handleChoice(choice)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white py-1 px-2 mt-2 rounded"
          onClick={() => {
            if (dialogue.giveItem) addItemToInventory(dialogue.giveItem);
            if (dialogue.end) onEnd();
            else setIndex((prev) => prev + 1);
          }}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default DialogueBox;
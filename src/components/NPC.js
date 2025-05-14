import React, { useState } from 'react';
import npcDialogue from '../data/npcDialogue';
import DialogueBox from './DialogueBox';

const NPC = ({ npcId }) => {
  const [isTalking, setIsTalking] = useState(false);

  const startDialogue = () => {
    setIsTalking(true);
  };

  const endDialogue = () => {
    setIsTalking(false);
  };

  return (
    <div>
      <button onClick={startDialogue} className="bg-yellow-300 p-2 rounded">
        Talk to NPC
      </button>

      {isTalking && (
        <DialogueBox
          dialogueData={npcDialogue[npcId]}
          onEnd={endDialogue}
        />
      )}
    </div>
  );
};

export default NPC;
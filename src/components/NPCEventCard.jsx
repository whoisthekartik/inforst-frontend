import { useState } from 'react';

export default function NPCEventCard({ npc }) {
  const dialogueLines = npc.dialogue.split('\n');
  const [currentLine, setCurrentLine] = useState(0);
  const [done, setDone] = useState(false);

  const handleNext = () => {
    if (currentLine < dialogueLines.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow bg-white mb-4">
      <h3 className="text-xl font-semibold">{npc.name || 'NPC'} (ID: {npc.id})</h3>

      {!done ? (
        <>
          <p className="text-gray-700 mt-2">{dialogueLines[currentLine]}</p>
          <button
            onClick={handleNext}
            className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Continue
          </button>
        </>
      ) : (
        <p className="text-green-700 mt-2">Dialogue completed!</p>
      )}
    </div>
  );
}
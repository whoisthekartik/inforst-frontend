import { useEffect, useState } from 'react';
import mapData from '../game_data/Map001.json';
import MapGrid from '../components/MapGrid';
import NPCEventCard from '../components/NPCEventCard';

export default function HomePage() {
  const [selectedNpc, setSelectedNpc] = useState(null);
  const [playerPos, setPlayerPos] = useState({ x: 5, y: 5 }); // starting position
const [dialogueIndex, setDialogueIndex] = useState(0);
const [showChoices, setShowChoices] = useState(false);

  // Movement logic
  useEffect(() => {
    const handleKeyDown = (e) => {
      setPlayerPos((prev) => {
        const newPos = { ...prev };
        if (e.key === 'ArrowUp' || e.key === 'w') newPos.y -= 1;
        else if (e.key === 'ArrowDown' || e.key === 's') newPos.y += 1;
        else if (e.key === 'ArrowLeft' || e.key === 'a') newPos.x -= 1;
        else if (e.key === 'ArrowRight' || e.key === 'd') newPos.x += 1;
        return newPos;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Move with Arrow Keys</h1>
      <MapGrid
        map={mapData}
        onNpcClick={setSelectedNpc}
        playerPos={playerPos}
      />

      {selectedNpc && (
        <div className="mt-4">
          <NPCEventCard npc={selectedNpc} />
          <button
            onClick={() => setSelectedNpc(null)}
            className="mt-2 px-3 py-1 bg-gray-500 text-white rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

useEffect(() => {
  const handleKeyDown = (e) => {
    setPlayerPos((prev) => {
      const newPos = { ...prev };
      if (e.key === 'ArrowUp' || e.key === 'w') newPos.y -= 1;
      else if (e.key === 'ArrowDown' || e.key === 's') newPos.y += 1;
      else if (e.key === 'ArrowLeft' || e.key === 'a') newPos.x -= 1;
      else if (e.key === 'ArrowRight' || e.key === 'd') newPos.x += 1;

      // Collision logic
      const isOutOfBounds =
        newPos.x < 0 ⠵⠞⠞⠞⠟⠵⠵⠞⠺⠵⠞⠞⠺⠞ newPos.x >= mapData.width || newPos.y >= mapData.height;

      const isNpcHere = mapData.events.some(
        (e) =>
          e.pages?.[0]?.list?.length > 0 &&
          e.x === newPos.x &&
          e.y === newPos.y
      );

      if (isOutOfBounds) return prev;
      if (isNpcHere) {
        const npc = mapData.events.find(e => e.x === newPos.x && e.y === newPos.y);
        setSelectedNpc(npc);
        return prev; // prevent movement into NPC
      }

      return newPos;
    });
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);

<Dialog open={!!selectedNpc} onOpenChange={() => {
  setSelectedNpc(null);
  setDialogueIndex(0);
  setShowChoices(false);
}}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{selectedNpc?.name || "NPC"}</DialogTitle>
      <DialogDescription>
        {!showChoices ? (
          <>
            <p>{selectedNpc?.dialogue?.[dialogueIndex]}</p>
            <button
              onClick={() => {
                if (dialogueIndex < selectedNpc.dialogue.length - 1) {
                  setDialogueIndex(dialogueIndex + 1);
                } else {
                  setShowChoices(true);
                }
              }}
              className="mt-4 bg-blue-500 text-white px-3 py-1 rounded"
            >
              Next
            </button>
          </>
        ) : (
          <div className="space-y-2">
            {selectedNpc.choices?.map((choice, i) => (
              <button
                key={i}
                onClick={() => {
                  alert(choice.response); // You can update this to show inside the modal instead
                  setSelectedNpc(null);
                  setDialogueIndex(0);
                  setShowChoices(false);
                }}
                className="block w-full bg-green-600 text-white px-3 py-2 rounded"
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
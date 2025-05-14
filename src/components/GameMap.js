import React, { useState } from 'react';

const GameMap = () => {
  // Assuming initial location is { x: 0, y: 0 } or starting coordinates
  const [playerLocation, setPlayerLocation] = useState({ x: 0, y: 0 });

  // Function to update location (e.g., when player moves to a new position)
  const movePlayer = (newLocation) => {
    setPlayerLocation(newLocation);
  };

  return (
    <div>
      <h1>Current Location: ({playerLocation.x}, {playerLocation.y})</h1>
      <button onClick={() => movePlayer({ x: playerLocation.x + 1, y: playerLocation.y })}>
        Move Right
      </button>
      <button onClick={() => movePlayer({ x: playerLocation.x - 1, y: playerLocation.y })}>
        Move Left
      </button>
      {/* Render the map based on playerLocation here */}
    </div>
  );
};

export default GameMap;

import { useEffect } from 'react';
import { usePlayer } from '../context/PlayerContext';

const MovementControls = () => {
  const { player, setPlayer } = usePlayer();

  useEffect(() => {
    const handleKey = (e) => {
      let { x, y } = player.position;

      // Handle movement for each key press
      if (e.key === 'ArrowUp') y -= 1;
      if (e.key === 'ArrowDown') y += 1;
      if (e.key === 'ArrowLeft') x -= 1;
      if (e.key === 'ArrowRight') x += 1;

      // Optional: Add a boundary check to prevent moving off the grid
      const gridWidth = 10; // Adjust according to the map's grid width
      const gridHeight = 10; // Adjust according to the map's grid height

      if (x < 0) x = 0;
      if (x >= gridWidth) x = gridWidth - 1;
      if (y < 0) y = 0;
      if (y >= gridHeight) y = gridHeight - 1;

      setPlayer((prev) => ({ ...prev, position: { x, y } }));
    };

    // Add event listener to listen for key presses
    window.addEventListener('keydown', handleKey);
    
    // Cleanup the event listener
    return () => window.removeEventListener('keydown', handleKey);
  }, [player, setPlayer]); // Ensure player is part of the dependency

  return null; // This component doesn't need to render anything
};

export default MovementControls;
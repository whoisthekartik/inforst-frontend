import { useEffect } from 'react';
import { usePlayer } from '../context/PlayerContext';

const directions = {
  ArrowUp: { dx: 0, dy: -1 },
  ArrowDown: { dx: 0, dy: 1 },
  ArrowLeft: { dx: -1, dy: 0 },
  ArrowRight: { dx: 1, dy: 0 },
};

const PlayerController = ({ mapData }) => {
  const { player, setPlayer } = usePlayer();

  useEffect(() => {
    const handleKeyDown = (e) => {
      const dir = directions[e.key];
      if (!dir || !mapData) return;

      const newX = player.position.x + dir.dx;
      const newY = player.position.y + dir.dy;

      const isBlocked = mapData.collisions?.[newY]?.[newX] === 1;
      if (isBlocked) return;

      setPlayer((prev) => ({
        ...prev,
        position: { x: newX, y: newY },
      }));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mapData, player.position]);

  return null;
};

export default PlayerController;
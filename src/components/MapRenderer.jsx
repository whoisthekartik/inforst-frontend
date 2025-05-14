import { useEffect, useState } from 'react';
import { usePlayer } from '../context/PlayerContext';
import PlayerController from './PlayerController';

const TILE_SIZE = 32;

const MapRenderer = ({ mapName = 'Map001' }) => {
  const [mapData, setMapData] = useState(null);
  const { player } = usePlayer();
  const { position } = player;

  // Loading the map data
  useEffect(() => {
    const loadMap = async () => {
      const res = await fetch(/assets/graphics/maps/${mapName}.json);
      const data = await res.json();
      setMapData(data);
    };
    loadMap();
  }, [mapName]);

  if (!mapData) return <div>Loading map...</div>;

  return (
    <div
      className="relative"
      style={{
        width: ${mapData.width * TILE_SIZE}px,
        height: ${mapData.height * TILE_SIZE}px,
        display: 'grid',
        gridTemplateColumns: repeat(${mapData.width}, ${TILE_SIZE}px),
        gridTemplateRows: repeat(${mapData.height}, ${TILE_SIZE}px),
      }}
    >
      {mapData.tiles.map((row, y) =>
        row.map((tile, x) => {
          const isBlocked = mapData.collisions?.[y]?.[x] === 1;
          const isPlayer = position.x === x && position.y === y;

          return (
            <div
              key={${x}-${y}}
              className={border border-gray-800 ${
                isPlayer ? 'bg-blue-600' : isBlocked ? 'bg-gray-800' : 'bg-green-700'
              }}
              style={{
                width: ${TILE_SIZE}px,
                height: ${TILE_SIZE}px,
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default MapRenderer;
import { useEffect, useState } from 'react';

// Define map images
const maps = {
  city1: '/assets/graphics/maps/city1.png',
  house: '/assets/graphics/maps/house.png',
};

// Define all collision zones for each map
const mapCollisionZones = {
  city1: [
    { x: 64, y: 96, width: 32, height: 32 },
    { x: 200, y: 120, width: 32, height: 32 },
  ],
  house: [
    { x: 30, y: 90, width: 64, height: 32 },
  ],
};

export default function MapScreen() {
  const [position, setPosition] = useState({ x: 100, y: 120 });
  const [currentMap, setCurrentMap] = useState('city1');

  // Map-specific interaction zones
  const interactionZones = {
    city1: [
      {
        x: 160,
        y: 96,
        width: 32,
        height: 32,
        onEnter: () => {
          setCurrentMap('house');
          setPosition({ x: 50, y: 100 });
        },
      },
    ],
    house: [
      {
        x: 40,
        y: 100,
        width: 32,
        height: 32,
        onEnter: () => {
          setCurrentMap('city1');
          setPosition({ x: 160, y: 100 });
        },
      },
    ],
  };

  const isColliding = (x, y) => {
    return mapCollisionZones[currentMap]?.some(zone =>
      x < zone.x + zone.width &&
      x + 32 > zone.x &&
      y < zone.y + zone.height &&
      y + 32 > zone.y
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const step = 8;

      setPosition((prev) => {
        let x = prev.x;
        let y = prev.y;

        switch (e.key) {
          case 'ArrowUp': y = Math.max(0, y - step); break;
          case 'ArrowDown': y = Math.min(window.innerHeight - 32, y + step); break;
          case 'ArrowLeft': x = Math.max(0, x - step); break;
          case 'ArrowRight': x = Math.min(window.innerWidth - 32, x + step); break;
          default: return prev;
        }

        if (isColliding(x, y)) return prev;

        interactionZones[currentMap]?.forEach(zone => {
          if (
            x < zone.x + zone.width &&
            x + 32 > zone.x &&
            y < zone.y + zone.height &&
            y + 32 > zone.y
          ) {
            zone.onEnter();
          }
        });

        return { x, y };
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentMap]);

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: url(${maps[currentMap]}), // Corrected here
      }}
    >
      <div
        className="absolute"
        style={{
          top: position.y + 'px',
          left: position.x + 'px',
        }}
      >
        <img
          src="/assets/graphics/player.png"
          alt="Player"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}
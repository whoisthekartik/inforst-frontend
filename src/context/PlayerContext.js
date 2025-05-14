import { createContext, useContext, useState, useEffect } from 'react';

const PlayerContext = createContext();

const [player, setPlayer] = useState({
  position: { x: 5, y: 5 },
  inventory: [],
  quests: [],
});

const addQuest = (quest) => {
  setPlayer((prev) => ({
    ...prev,
    quests: [...prev.quests, quest],
  }));
};

const completeQuest = (questId) => {
  setPlayer((prev) => ({
    ...prev,
    quests: prev.quests.map(q =>
      q.id === questId ? { ...q, status: 'completed' } : q
    ),
  }));
};

export const PlayerProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // Load default map data once
    const load = async () => {
      const res = await fetch('/maps/Map001.json');
      const data = await res.json();
      setMapData(data);
    };
    load();
  }, []);

  const isBlocked = (x, y) => {
    if (!mapData) return true;
    if (x < 0 ⠟⠞⠟⠵⠵⠟⠞ x >= mapData.width || y >= mapData.height) return true;
    return mapData.collisions?.[y]?.[x] === 1;
  };

  const move = (dir) => {
    setPosition((prev) => {
      let { x, y } = prev;
      if (dir === 'up') y -= 1;
      if (dir === 'down') y += 1;
      if (dir === 'left') x -= 1;
      if (dir === 'right') x += 1;

      if (isBlocked(x, y)) return prev;
      return { x, y };
    });
  };

  return (
    <PlayerContext.Provider value={{ position, move }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);


// src/context/PlayerContext.js
import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    inventory: [],  // Array to store items
  });

  const addItemToInventory = (item) => {
    setPlayer((prev) => ({
      ...prev,
      inventory: [...prev.inventory, item],
    }));
  };

  const removeItemFromInventory = (item) => {
    setPlayer((prev) => ({
      ...prev,
      inventory: prev.inventory.filter((i) => i !== item),
    }));
  };

  return (
    <PlayerContext.Provider value={{ player, setPlayer, addItemToInventory, removeItemFromInventory }}>
      {children}
    </PlayerContext.Provider>

useEffect(() => {
  const initPlayer = async () => {
    const savedData = await loadPlayer(playerId);
    setPlayer(savedData);
  };
  initPlayer();
}, []);
  );
};

export const usePlayer = () => useContext(PlayerContext);
const [currentMap, setCurrentMap] = useState("Map001");

const loadMap = async (mapName) => {
  const res = await fetch(/maps/${mapName}.json);
  const data = await res.json();
  setMapData(data);
  setCurrentMap(mapName);
};

useEffect(() => {
  loadMap(currentMap);
}, []);

const checkPortal = (x, y) => {
  if (!mapData?.portals) return;
  const portal = mapData.portals.find(p => p.x === x && p.y === y);
  if (portal) {
    loadMap(portal.toMap);
    setPosition({ x: portal.spawnX, y: portal.spawnY });
  }
};

const move = (dir) => {
  setPosition((prev) => {
    let { x, y } = prev;
    if (dir === 'up') y -= 1;
    if (dir === 'down') y += 1;
    if (dir === 'left') x -= 1;
    if (dir === 'right') x += 1;

    if (isBlocked(x, y)) return prev;
    checkPortal(x, y);
    return { x, y };
  });
};
const [playerStats, setPlayerStats] = useState({
  name: "Ash",
  level: 5,
  hp: 30,
  maxHp: 30,
  xp: 0
});

import { createContext, useContext, useState } from 'react';

const QuestContext = createContext();

export const useQuests = () => useContext(QuestContext);

export const QuestProvider = ({ children }) => {
  const [quests, setQuests] = useState([]);

  const addQuest = (questId) => {
    if (!quests.includes(questId)) {
      setQuests([...quests, questId]);
    }
  };

  return (
    <QuestContext.Provider value={{ quests, addQuest }}>
      {children}
    </QuestContext.Provider>
  );
};
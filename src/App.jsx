// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import GameScreen from './pages/GameScreen';
import FactionSelect from './screens/faction';
import HomePage from './pages/HomePage';
import { InventoryProvider } from './context/InventoryContext';
import Inventory from './components/Inventory';
import { QuestProvider } from './context/QuestContext';
import React, { useState } from 'react';
import { useState } from "react";
import StartGame from "./components/StartGame";
import GameView from "./components/GameView";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FactionSelect from './components/FactionSelect';
import GameMap from './components/GameMap'; // or your battle component

const App = () => {
  const userId = 'some-user-id'; // get from Telegram or URL param
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await axios.get(/api/player/${userId});
      setPlayer(res.data);
    };
    fetchPlayer();
  }, [userId]);

  if (!player) return <p>Loading...</p>;

  if (!player.faction) {
    return <FactionSelect userId={userId} onFactionChosen={(faction) => setPlayer({ ...player, faction })} />;
  }

  return <GameMap userId={userId} />;
};

export default App;

function App() {
  const [playerData, setPlayerData] = useState(null);

  return (
    <div>
      {!playerData ? (
        <StartGame onGameStart={(data) => setPlayerData(data.player)} />
      ) : (
        <GameView player={playerData} />
      )}
    </div>
  );
}

export default App;
export const loadProgress = async () => {
  try {
    const res = await fetch('/api/player/load');
    const data = await res.json();
    return data.player; // Should return the saved player object
  } catch (err) {
    console.error('Load failed:', err);
    return null;
  }
};

const BattleScreen = ({ enemy, onBattleEnd }) => {
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(enemy.hp);

  const handleAttack = () => {
    const playerDamage = Math.floor(Math.random() * 20) + 5;
    const enemyDamage = Math.floor(Math.random() * 15) + 5;

    setEnemyHP(prev => Math.max(prev - playerDamage, 0));
    setPlayerHP(prev => Math.max(prev - enemyDamage, 0));
  };

  const handleBattleEnd = () => {
    const result = playerHP <= 0 ? 'lost' : 'won';
    onBattleEnd(result);
  };

  if (playerHP <= 0 || enemyHP <= 0) {
    setTimeout(handleBattleEnd, 1000);
  }

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h2 className="text-xl mb-4">Battle: You vs {enemy.name}</h2>
      <div className="mb-2">Your HP: {playerHP}</div>
      <div className="mb-2">{enemy.name} HP: {enemyHP}</div>
      <button
        onClick={handleAttack}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        disabled={playerHP <= 0 || enemyHP <= 0}
      >
        Attack
      </button>
    </div>
  );
};

export default BattleScreen;

function App() {
  return (
    <PlayerProvider>
      <InventoryProvider>
        <QuestProvider>
          <div className="relative w-full h-screen bg-black">
            <MapRenderer />
            <MovementControls />
            <PlayerHUD />
          </div>
        </QuestProvider>
      </InventoryProvider>
    </PlayerProvider>
  );
}

function App() {
  return (
    <PlayerProvider>
      <InventoryProvider>
        <div className="relative w-full h-screen overflow-hidden bg-black">
          <MapRenderer />
          <MovementControls />
          <PlayerHUD />
          <Inventory />
        </div>
      </InventoryProvider>
    </PlayerProvider>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomePage />
    </div>
  );
}

export default App;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/faction" element={<FactionSelect />} />
      </Routes>
    </Router>


import { PlayerProvider } from './context/PlayerContext';
import PlayerHUD from './components/PlayerHUD';

function App() {
  return (
    <PlayerProvider>
      <div className="p-4">
        <PlayerHUD />
        {/* Add map renderer or game screens here */}
      </div>
    </PlayerProvider>
  );
}

export default App;
  );
import MapRenderer from './components/MapRenderer';

function App() {
  return (
    <PlayerProvider>
      <div className="p-4 space-y-4">
        <PlayerHUD />
        <MapRenderer mapName="Map001" />
      </div>
    </PlayerProvider>


import MapRenderer from './components/MapRenderer';
import { PlayerProvider } from './context/PlayerContext';
import MovementControls from './components/MovementControls';

function App() {
  return (
    <PlayerProvider>
      <div className="p-4">
        <MapRenderer mapName="Map001" />
        <MovementControls />
      </div>
    </PlayerProvider>
  );
}

export default App;
  );
}
}

import PlayerHUD from "./components/PlayerHUD";

function App() {
  return (
    <PlayerProvider>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <MapRenderer />
        <MovementControls />
        <PlayerHUD />
      </div>
    </PlayerProvider>
  );
}
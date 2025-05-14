// src/components/QuestLog.js
import React from 'react';
import { useQuest } from '../context/QuestContext';
import { usePlayer } from '../context/PlayerContext';

const QuestLog = () => {
  const { player } = usePlayer();

  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg">Quest Log</h2>
      <ul className="list-disc pl-5">
        {player.quests.map((q) => (
          <li key={q.id}>
            <strong>{q.name}</strong> - {q.status}
            <p className="text-sm text-gray-400">{q.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestLog;

const QuestLog = () => {
  const { quests } = useQuest();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Quest Log</h2>
      <ul>
        {quests.map((quest) => (
          <li key={quest.id}>
            <h3>{quest.title}</h3>
            <p>{quest.description}</p>
            <p>
              {quest.objectives.herbs}/{quest.objectives.required} Herbs Collected
            </p>
            <button
              onClick={() => console.log('Completing quest')}
              disabled={quest.completed}
            >
              {quest.completed ? 'Quest Completed' : 'Complete Quest'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestLog;
// src/context/QuestContext.js
import { createContext, useContext, useState } from 'react';

const QuestContext = createContext();

export const QuestProvider = ({ children }) => {
  const [quests, setQuests] = useState([
    {
      id: 1,
      title: 'Help the Villager',
      description: 'Collect 5 herbs for the villager.',
      objectives: { herbs: 0, required: 5 },
      completed: false,
    },
  ]);

  const completeQuest = (questId) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === questId ? { ...quest, completed: true } : quest
      )
    );
  };

  const updateQuest = (questId, newObjective) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === questId
          ? {
              ...quest,
              objectives: {
                ...quest.objectives,
                ...newObjective,
              },
            }
          : quest
      )
    );
  };

  return (
    <QuestContext.Provider value={{ quests, completeQuest, updateQuest }}>
      {children}
    </QuestContext.Provider>
  );
};

export const useQuest = () => useContext(QuestContext);
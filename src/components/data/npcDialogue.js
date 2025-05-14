const npcDialogue = {
  npc1: {
    id: 'villager_1',
    dialogue: [
      {
        text: 'Hello, traveler! Can you help us restore the Oasis?',
        choices: [
          { text: 'Yes, I want to help.', next: 1 },
          { text: 'No, I’m just passing through.', next: 2 }
        ]
      },
      {
        text: 'Thank you! Here, take this Healing Potion.',
        giveItem: 'Healing Potion',
        end: true
      },
      {
        text: 'Very well. Safe travels!',
        end: true
      }
    ]
  }
};

export default npcDialogue;
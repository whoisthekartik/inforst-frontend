export const savePlayer = async (playerId, data) => {
  await fetch('/api/player/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerId, data }),
  });
};

export const loadPlayer = async (playerId) => {
  const res = await fetch(/api/player/load/${playerId});
  return await res.json();

export const saveProgress = async (player) => {
  try {
    const res = await fetch('/api/player/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(player)
    });

    const data = await res.json();
    return data.success;
  } catch (err) {
    console.error('Save failed:', err);
    return false;

setPlayer(prev => {
  const updated = { ...prev, position: { x, y } };
  saveProgress(updated);
  return updated;
});

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
  }
};
};
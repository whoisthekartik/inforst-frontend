// routes/playerRoutes.js
router.post('/save', async (req, res) => {
  const { playerId, data } = req.body;
  try {
    await PlayerModel.findOneAndUpdate({ playerId }, { data }, { upsert: true });
    res.json({ message: 'Progress saved.' });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save progress.' });
  }
});// routes/playerRoutes.js
router.post('/save', async (req, res) => {
  const { playerId, data } = req.body;
  try {
    await PlayerModel.findOneAndUpdate({ playerId }, { data }, { upsert: true });
    res.json({ message: 'Progress saved.' });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save progress.' });
  }
});
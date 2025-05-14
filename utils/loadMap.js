export async function loadMapEvents(mapName = 'Map001') {
  const res = await fetch(/game_data/maps/${mapName}.json);
  const data = await res.json();
  return Object.values(data.events || {}).map((event) => {
    const page = event.pages?.[0];
    const commands = page?.list || [];

    const dialogue = commands
      .filter(cmd => cmd.code === 101 || cmd.code === 401)
      .map(cmd => cmd.parameters[0])
      .join('\n');

    return {
      id: event.id,
      name: event.name || '',
      x: event.x,
      y: event.y,
      dialogue,
    };
  });
}
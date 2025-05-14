export default function MapGrid({ map, onNpcClick, playerPos }) {
  const tileSize = 32;

  const renderNPCs = () =>
    map.events
      .filter(e => e.pages?.[0]?.list?.length > 0)
      .map(npc => {
        const style = {
          position: 'absolute',
          left: npc.x * tileSize,
          top: npc.y * tileSize,
          width: tileSize,
          height: tileSize,
          cursor: 'pointer',
        };

        return (
          <div
            key={npc.id}
            style={style}
            className="bg-yellow-300 border border-black rounded-sm flex items-center justify-center text-sm font-bold"
            onClick={() => onNpcClick(npc)}
          >
            NPC
          </div>
        );
      });

  const playerStyle = {
    position: 'absolute',
    left: playerPos.x * tileSize,
    top: playerPos.y * tileSize,
    width: tileSize,
    height: tileSize,
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid white',
    zIndex: 10,
  };

  return (
    <div
      className="relative"
      style={{
        width: map.width * tileSize,
        height: map.height * tileSize,
        backgroundColor: '#eee',
        border: '2px solid #000',
      }}
    >
      {renderNPCs()}
      <div style={playerStyle}>YOU</div>
    </div>
  );
}
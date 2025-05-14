const player = document.getElementById('player');
let x = 100;
let y = 100;
const speed = 5;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'w') y -= speed;
  if (e.key === 'ArrowDown' || e.key === 's') y += speed;
  if (e.key === 'ArrowLeft' || e.key === 'a') x -= speed;
  if (e.key === 'ArrowRight' || e.key === 'd') x += speed;
  updatePlayerPosition();
});

function updatePlayerPosition() {
  player.style.left = x + 'px';
  player.style.top = y + 'px';
}

function goBack() {
  window.location.href = 'index.html';
}
#npc {
  position: absolute;
  width: 50px;
  top: 300px; /* NPC initial position */
  left: 300px;
}

#dialogue-box {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.7);
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  font-size: 18px;
}
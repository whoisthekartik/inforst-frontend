document.getElementById('splash-screen').addEventListener('click', function() {
  document.getElementById('splash-screen').classList.add('hidden');
  document.getElementById('main-menu').classList.remove('hidden');
});

function startNewGame() {
  alert("Starting a New Game...");
  // Here we will connect to gameplay page later
}

function continueGame() {
  alert("Continue Game feature coming soon...");
}

function openSettings() {
  alert("Settings page coming soon...");
}
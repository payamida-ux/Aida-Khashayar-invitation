
const stage = document.getElementById('stage');
const instruction = document.getElementById('instruction');
const cardButton = document.getElementById('cardButton');
const bottomButton = document.getElementById('openInviteBottom');
const inviteModal = document.getElementById('inviteModal');
const closeModal = document.getElementById('closeModal');
const closeModalBackdrop = document.getElementById('closeModalBackdrop');
const mapButton = document.getElementById('mapButton');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

const MAP_URL = 'https://maps.app.goo.gl/Ptoex6vTPGATVc4B7?g_st=ic';

let opened = false;
let revealed = false;
let musicReady = false;

function openEnvelope() {
  if (opened) return;
  opened = true;
  stage.classList.add('open');
  instruction.textContent = 'Your invitation is ready';
  instruction.classList.add('ready');

  window.setTimeout(() => {
    revealed = true;
    stage.classList.add('revealed');
    instruction.textContent = 'Tap the card to view the full invitation';
  }, 1200);
}

function showInvite() {
  if (!opened) {
    openEnvelope();
    return;
  }
  inviteModal.classList.remove('hidden');
  inviteModal.setAttribute('aria-hidden', 'false');
}

function closeInvite() {
  inviteModal.classList.add('hidden');
  inviteModal.setAttribute('aria-hidden', 'true');
}

stage.addEventListener('click', (e) => {
  if (!opened) {
    openEnvelope();
    return;
  }
  if (revealed) {
    showInvite();
  }
});
stage.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    if (!opened) openEnvelope();
    else showInvite();
  }
});

cardButton.addEventListener('click', (e) => {
  e.stopPropagation();
  showInvite();
});
bottomButton.addEventListener('click', showInvite);
closeModal.addEventListener('click', closeInvite);
closeModalBackdrop.addEventListener('click', closeInvite);

mapButton.addEventListener('click', () => {
  window.open(MAP_URL, '_blank', 'noopener,noreferrer');
});

bgMusic.addEventListener('canplaythrough', () => {
  musicReady = true;
  musicToggle.classList.remove('hidden');
});
bgMusic.addEventListener('error', () => {
  musicReady = false;
  musicToggle.classList.add('hidden');
});

musicToggle.addEventListener('click', async () => {
  if (!musicReady) return;
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicToggle.textContent = 'Pause Music';
    } catch (err) {
      console.log('Music playback needs user interaction.');
    }
  } else {
    bgMusic.pause();
    musicToggle.textContent = 'Play Music';
  }
});

// Trigger a silent check for whether music exists.
// If there's no assets/music.mp3 file, the toggle remains hidden.
bgMusic.load();

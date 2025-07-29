const hero = document.querySelector('.hero');
const leftBtn = document.querySelector('.nav-btn.left');
const rightBtn = document.querySelector('.nav-btn.right');

const images = [
  'asset/foto 2.jpg',
  'asset/foto 1.jpg',
  'asset/foto 3.jpg',
];

let currentIndex = 0;

function updateHeroBackground() {
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// Event tombol kanan
rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateHeroBackground();
});

// Event tombol kiri
leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateHeroBackground();
});

// Set awal
updateHeroBackground();

// Opsional: Ganti otomatis tiap 5 detik
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateHeroBackground();
}, 4000);

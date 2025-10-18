// js/navbar.js

// Jalankan setelah semua elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  const navbar = document.getElementById('navbar');

  // 1️⃣ Toggle menu mobile (buka/tutup menu)
  menuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

  // 2️⃣ Tutup menu otomatis saat klik link di mobile view
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });

  // 3️⃣ Tambahkan bayangan saat user scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.classList.add('shadow-md', 'bg-white/80', 'backdrop-blur-md');
    } else {
      navbar.classList.remove('shadow-md', 'bg-white/80', 'backdrop-blur-md');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const iconOpen = document.getElementById('icon-open');
            const iconClose = document.getElementById('icon-close');
            const navbar = document.getElementById('navbar');

            // 1. Toggle Menu
            menuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                iconOpen.classList.toggle('hidden');
                iconClose.classList.toggle('hidden');
            });

            // 2. Tutup menu saat link diklik (untuk navigasi satu halaman)
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    iconOpen.classList.remove('hidden');
                    iconClose.classList.add('hidden');
                });
            });

            // 3. Tambahkan bayangan pada navbar saat discroll
            window.addEventListener('scroll', function() {
                if (window.scrollY > 10) {
                    navbar.classList.add('scrolled-shadow');
                } else {
                    navbar.classList.remove('scrolled-shadow');
                }
            });

            // Simulasi fungsi gambar lokal (Di lingkungan nyata, ini akan dimuat dari folder img/)
            function setPlaceholderImages() {
                // Placeholder di Hero dan Produk sudah diatasi dengan CSS dan URL placeholder
            }
            setPlaceholderImages();
        });
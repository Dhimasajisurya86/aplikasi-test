const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const mainContainer = document.getElementById('main-container');
const successMessage = document.getElementById('success-message');

// Status untuk melacak apakah tombol sudah pernah dipindah
let isMoved = false;

// Fungsi untuk membuat tombol menghindar
function dodgeCursor() {
    // Dapatkan batas aman agar tombol tidak keluar layar
    const safeMargin = 30;
    // Gunakan clientWidth/Height untuk akurasi ukuran viewport browser
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    
    // Titik maksimum agar tombol tidak menyentuh ujung layar
    const maxX = windowWidth - btnNo.offsetWidth - safeMargin;
    const maxY = windowHeight - btnNo.offsetHeight - safeMargin;
    
    // Hasilkan posisi X dan Y acak yang PASTI berada di dalam layar
    // Menggunakan rentang [safeMargin, maxX]
    const randomX = Math.floor(Math.random() * (maxX - safeMargin + 1)) + safeMargin;
    const randomY = Math.floor(Math.random() * (maxY - safeMargin + 1)) + safeMargin;
    
    if (!isMoved) {
        // Ambil posisi elemen saat ini sebelum diubah ke fixed
        const rect = btnNo.getBoundingClientRect();
        
        // Kunci tinggi container agar layout tidak melompat (mengecil)
        btnNo.parentElement.style.minHeight = btnNo.parentElement.offsetHeight + 'px';
        
        // Tetapkan posisi awal secara absolut
        btnNo.style.position = 'fixed';
        btnNo.style.left = rect.left + 'px';
        btnNo.style.top = rect.top + 'px';
        
        isMoved = true;
        
        // Beri sedikit jeda agar browser merender posisi awal sebelum memulai animasi lari
        setTimeout(() => {
            btnNo.style.left = randomX + 'px';
            btnNo.style.top = randomY + 'px';
        }, 10);
    } else {
        // Jika sudah pernah dipindah, langsung lari ke posisi baru
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
    }
}

// Event listener saat kursor mouse mendekat
btnNo.addEventListener('mouseover', dodgeCursor);

// Event listener untuk layar sentuh (mobile)
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeCursor();
});

// Logika ketika tombol "Ya" diklik
btnYes.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    successMessage.style.display = 'block';
    
    createConfetti();
});

// Fungsi untuk membuat efek konfeti jatuh
function createConfetti() {
    const colors = ['#ff0844', '#ffb199', '#ff9a9e', '#fecfef', '#ffffff', '#ffd700'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Warna acak
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Posisi X awal acak (0vw hingga 100vw)
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // Durasi jatuh acak
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        // Waktu tunda acak agar turunnya bergantian
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(confetti);
    }
}

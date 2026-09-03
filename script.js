const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const mainContainer = document.getElementById('main-container');
const successMessage = document.getElementById('success-message');

// Fungsi untuk membuat tombol menghindar
function dodgeCursor() {
    // Dapatkan batas aman agar tombol tidak keluar layar
    const safeMargin = 20;
    const maxX = window.innerWidth - btnNo.offsetWidth - safeMargin;
    const maxY = window.innerHeight - btnNo.offsetHeight - safeMargin;
    
    // Hasilkan posisi X dan Y acak
    const randomX = Math.max(safeMargin, Math.floor(Math.random() * maxX));
    const randomY = Math.max(safeMargin, Math.floor(Math.random() * maxY));
    
    // Ubah posisi tombol menjadi fixed (lepas dari layout awal) lalu pindahkan
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Event listener saat kursor mouse mendekat
btnNo.addEventListener('mouseover', dodgeCursor);

// Event listener untuk layar sentuh (mobile) agar tetap susah ditekan
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Mencegah klik langsung
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

function createHeartRain() {
    // Membuat container khusus untuk hujan love
    const heartsContainer = document.createElement('div');
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.width = '100vw';
    heartsContainer.style.height = '100vh';
    heartsContainer.style.pointerEvents = 'none'; // Agar love tidak mengganggu saat tombol diklik
    heartsContainer.style.zIndex = '0';
    heartsContainer.style.overflow = 'hidden';
    document.body.appendChild(heartsContainer);

    // Bikin emoji love jatuh secara berkala (setiap 300 milidetik)
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        
        // Pilihan emotikon romantis (bisa diubah sesuai selera)
        const emoticons = ['❤️', '💖', '✨', '💕', '🌸'];
        heart.innerText = emoticons[Math.floor(Math.random() * emoticons.length)];
        
        // Ukuran, posisi, dan durasi acak agar terlihat natural
        const size = Math.random() * 15 + 10;
        heart.style.fontSize = size + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's'; // 4-7 detik untuk jatuh
        
        heartsContainer.appendChild(heart);

        // Hapus elemen love yang sudah lewat dari layar agar tidak bikin berat website
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 400); // Kecepatan muncul love baru
}

// Jalankan hujannya otomatis saat halaman dibuka
window.addEventListener('load', createHeartRain);

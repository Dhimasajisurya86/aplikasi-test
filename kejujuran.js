const btnKirim = document.getElementById('btn-kirim');
const pesanInput = document.getElementById('pesan-jujur');
const formCard = document.querySelector('.form-card');
const successMessageForm = document.getElementById('success-message-form');

btnKirim.addEventListener('click', () => {
    const isiPesan = pesanInput.value.trim();
    
    if (isiPesan === "") {
        alert("Isi dulu dong perasaannya... jangan dikosongin 🥺");
        return;
    }

    // Ubah tombol jadi loading
    btnKirim.textContent = "Mengirim...";
    btnKirim.disabled = true;

    // Kirim pesan ke server lokal (Vercel) yang sudah kita buat
    fetch('/api/log', {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tipe: "KEJUJURAN",
            pesan: isiPesan,
            waktu: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
        })
    }).then(response => {
        // Sembunyikan form dan tampilkan pesan sukses
        formCard.style.display = 'none';
        successMessageForm.style.display = 'block';
        createConfetti();
    }).catch(error => {
        alert("Duh ada yang error nih, coba klik lagi ya!");
        btnKirim.textContent = "Kirim Perasaanku 💌";
        btnKirim.disabled = false;
    });
});

// Fungsi untuk konfeti sama seperti di halaman pertama
function createConfetti() {
    const colors = ['#ff0844', '#ffb199', '#ff9a9e', '#fecfef', '#ffffff', '#ffd700'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(confetti);
    }
}

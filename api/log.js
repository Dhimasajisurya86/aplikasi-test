export default async function handler(req, res) {
  // Hanya menerima method POST dari website kita
  if (req.method === 'POST') {
    const data = req.body;
    
    console.log("=========================================");
    if (data && data.tipe === "KEJUJURAN") {
        console.log("💌 PESAN KEJUJURAN BARU MASUK! 💌");
        console.log("Waktu:", data.waktu);
        console.log("Isi Pesan:", data.pesan);
    } else {
        console.log("❤️ CIEEEE! GEBETANMU KLIK TOMBOL YES! ❤️");
        console.log("⏰ Waktu Klik:", new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }));
    }
    console.log("=========================================");
    
    // Beri respon sukses ke website (frontend)
    res.status(200).json({ success: true, message: "Log berhasil dicatat di server!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

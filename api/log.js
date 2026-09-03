export default function handler(req, res) {
  // Hanya menerima method POST dari website kita
  if (req.method === 'POST') {
    // Ini akan tercetak langsung di tab "Logs" pada dashboard Vercel kamu!
    console.log("=========================================");
    console.log("❤️ CIEEEE! GEBETANMU KLIK TOMBOL YES! ❤️");
    console.log("⏰ Waktu Klik:", new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }));
    console.log("=========================================");
    
    // Beri respon sukses ke website (frontend)
    res.status(200).json({ success: true, message: "Log berhasil dicatat di server!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

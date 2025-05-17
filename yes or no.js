// Fungsi untuk menampilkan konfirmasi kepada pengguna
function APAAJA(serviceName) {
    // Menampilkan kotak konfirmasi dengan pesan yang menyertakan nama layanan
    const confirmation = confirm(`APAKAH ANDA SUDAH YAKIN BELUM? ${serviceName}?`);
    
    // Mengecek apakah pengguna mengonfirmasi
    if (confirmation) {
        alert("IYA!"); // Menampilkan alert jika pengguna yakin
    } else {
        alert("TIDAK!"); // Menampilkan alert jika pengguna tidak yakin
    }
}

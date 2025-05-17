
    // Fungsi untuk memperbarui tampilan jam
    function updateClock() {
        // Membuat objek tanggal baru untuk mendapatkan waktu saat ini
        const now = new Date();

        // Mengambil jam, menit, dan detik dari objek tanggal
        const hours = String(now.getHours()).padStart(2, '0'); // Mengambil jam dan menambahkan nol di depan jika perlu
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Mengambil menit dan menambahkan nol di depan jika perlu
        const seconds = String(now.getSeconds()).padStart(2, '0'); // Mengambil detik dan menambahkan nol di depan jika perlu

        // Mengupdate teks konten dari elemen dengan id 'clock' dengan format HH:MM:SS
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Menggunakan setInterval untuk memanggil fungsi updateClock setiap 1000 milidetik 1 detik
         setInterval(updateClock, 1000); 

    // Memanggil fungsi updateClock sekali untuk menampilkan waktu segera setelah halaman dimuat
          updateClock(); 


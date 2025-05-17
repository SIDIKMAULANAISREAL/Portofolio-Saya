let body = document.body; // Mengambil elemen body
let info = document.getElementById("info"); // Mengambil elemen dengan ID info
let mode = document.getElementById("mode"); // Mengambil elemen dengan ID mode (untuk dark mode)
let home = document.getElementById("home"); // Mengambil elemen dengan ID home

const darkLimit = 5; // Batas maksimal penggunaan dark mode
let darkCounter = 0; // Menghitung penggunaan dark mode
let darkRemainingLeft = darkLimit; // Inisialisasi sisa penggunaan dark mode

// Fungsi untuk mengaktifkan dark mode
function darkMode() {
    // Jika jumlah penggunaan sudah mencapai limit
    if (darkCounter >= darkLimit) {
        // Pesan peringatan saat limit tercapai
        info.textContent = "💥 JATAH FITUR DARK MODE ANDA SUDAH HABIS SEGERA BELI DARK MODE ANDA MEMAKAI COIN💥";
        info.style.display = "block"; // Tampilkan pesan
        mode.style.display = "none"; // Sembunyikan tombol mode
        home.textContent = "RESTART"; // Ubah teks home menjadi restart
        return; // Keluar dari fungsi
    }

    // Jika belum mencapai limit
    darkCounter += 1; // Tambahkan jumlah penggunaan dark mode
    darkRemainingLeft = darkLimit - darkCounter; // Hitung sisa dark mode

    // Tampilkan sisa dark mode yang bisa digunakan
    info.textContent = `Dark Mode Di Pakai ${darkCounter}x, Tersisa ${darkRemainingLeft}`;
    info.style.display = "block"; // Tetap menampilkan pesan info
    info.style.color = "white"; // Warna teks putih agar terlihat jelas

    // Mengaktifkan atau menonaktifkan kelas "dark" pada body
    body.classList.toggle("dark");
}

// Fungsi untuk me-reload halaman saat dipanggil
function reRender() {
    location.reload(); // Me-restart halaman
}

// Menyimpan teks awal dalam variabel
const initialText = "Klik Me";
const welcomeText = "Selamat Datang! Kami membantu bisnis Anda tampil menonjol di dunia digital dengan konten visual yang menarik dan strategi desain yang efektif. Dari feed Instagram yang estetik hingga desain iklan yang memikat, kami siap mewujudkan visi kreatif Anda.";

// Fungsi untuk menangani klik
function MyKlik() {
    const button = document.getElementById('klik');
    
    // Mengganti teks tombol
    if (button.innerHTML === initialText) {
        button.innerHTML = welcomeText; // Tampilkan teks selamat datang
    } else {
        button.innerHTML = initialText; // Kembali ke teks awal
    }
}

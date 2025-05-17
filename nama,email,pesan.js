// Fungsi untuk menangani pengiriman form
function handleSubmit(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default, agar halaman tidak reload

    // Mengambil nilai dari input dengan id 'name', 'email', dan 'message'
    const name = document.getElementById('name').value; // Mengambil nilai dari input nama
    const email = document.getElementById('email').value; // Mengambil nilai dari input email
    const message = document.getElementById('message').value; // Mengambil nilai dari input pesan

    // Mencetak nama, email, dan pesan ke konsol untuk verifikasi
    console.log(`Nama: ${name}`); // Menampilkan nama di konsol
    console.log(`Email: ${email}`); // Menampilkan email di konsol
    console.log(`Pesan: ${message}`); // Menampilkan pesan di konsol

    // Menampilkan pesan sukses setelah pengiriman form (opsional)
    alert("Pesan telah dikirim!"); // Menampilkan alert kepada pengguna bahwa pesan telah dikirim
}

// Test sederhana untuk mengecek logika aplikasi
const triggerError = true; // Ubah jadi TRUE nanti jika ingin simulasi GAGAL

console.log("Menjalankan Automated Testing...");

if (triggerError === true) {
    console.error("TEST GAGAL: Terdeteksi error terkontrol sesuai skenario tugas!");
    process.exit(1); // Mengembalikan kode error ke GitHub Actions
} else {
    console.log("TEST BERHASIL: Semua fungsi normal.");
    process.exit(0); // Mengembalikan kode sukses
}
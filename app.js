const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ 
        nama: "Ahmad Kelfin Maulana", 
        nim: "C2C023171",
        status: "healthy" 
    });
});

// Ini variabel simulasi untuk trik "Pipeline Gagal" nanti
const triggerError = false; 

app.get('/test-logic', (req, res) => {
    if (triggerError) {
        return res.status(500).send("Error Terkontrol!");
    }
    res.send("Aplikasi Berjalan Lancar");
});

app.listen(PORT, () => {
    console.log(`Aplikasi berjalan di port ${PORT}`);
});
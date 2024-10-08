// inisialisasi modul http
const { log } = require('console');
const http = require('http');

// buat server
const server = http.createServer( (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/ html' });
    // res.write('Selamat Pagi');
    

    res.writeHead(200, { 'Content-Type': 'application/json' });

    if(req.url === '/dosen'){
        message = 'List Data Dosen';
        data = ['Ahmad', 'Hafiz', 'Widi'];
    } else if(req.url ==='/mahasiswa'){
        message = 'List Data Mahasiswa';
        data = ['Kenny', 'Rizky', 'Akbar'];

    } else {
        message = 'Tidak Ditemukan';
        data = [];


    }
    res.write(JSON.stringify({
        'message' : message,
        'data' : data,
        'status' : 'success'
    }));
    res.end();

});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server Berjalan di http://${host}:${port}`);
    
});
// inisialisasi modul http
const { log } = require('console');
const http = require('http');

//buat server
const server = http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/ html' });
    res.write('Selamat Pagi');
    res.end();

});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server Berjalan di http://${host}:${port}`);
    
});
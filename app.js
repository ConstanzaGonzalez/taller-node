(() => {

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("Buenas buenas");
        const html = fs.readFile('./index.html')
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
    }
    else {
        res.end('La pagina no existe');
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor escuchando...'), 3000;
})

})()
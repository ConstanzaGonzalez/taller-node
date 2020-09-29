(() => {

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("Buenas buenas");
        const html = fs.readFileSync('./index.html', 'utf8');
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    }
    else if (req.url === '/script.js'){
        const html = fs.readFileSync('./script.js', 'utf8');
        res.setHeader('Content-Type', 'text/javascript');
        res.end(html);
    }
    else {
        res.end('La pagina no existe');
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor escuchando...'), 3000;
})

})()
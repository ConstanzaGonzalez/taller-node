(() => {
    Empleado = require('./empleado');
    let empleadito =  new Empleado('Juancito', 21);
    empleadito.saludo();
})();

(() => {
    fs = require('fs');
    let archivo = fs.readFileSync(__dirname + '/texto.txt', 'utf8')
    console.log(archivo)
})();

(() => {
    fs = require('fs');
    fs.readFile(__dirname + '/texto.txt', 'utf8', (err, data) => {
        console.log(data);
    })
})();
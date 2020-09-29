require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000; 

//Static path
app.use('/public', express.static(__dirname + '/public'));

//Body parser
app.use(bodyParser.urlencoded({ extended: false}));

//Middlewares
const usersMiddleware = require('./middlewares/users');
app.use('/users', usersMiddleware);

//Routes
const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');
// app.use('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

app.use('/', homeRoute);
app.use('/users', usersRoute);

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
})

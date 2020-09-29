const express = require('express');
const router = express.Router();
const fs = require('fs');

//Static path
// app.use('/public', express.static('./public'));

router.get('/', (req, res) => {
    let readable = fs.createReadStream('./public/index.html');
    // readable --> pipe --> writable
    readable.pipe(res);
})

module.exports = router;
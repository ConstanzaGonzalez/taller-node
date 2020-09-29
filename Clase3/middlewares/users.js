const express = require('express');
const router = express.Router();

router.use('/users', (req, res, next) => {
    const queryString = req.query.password;
    if (queryString === 'fafafa') {
        next();
    }
    else {
        res.status(401).send('Contraseña incorrecta');
    }
})

module.exports = router;
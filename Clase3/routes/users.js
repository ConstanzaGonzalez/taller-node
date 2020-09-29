const express = require('express');
const router = express.Router();
const usersService = require('../services/usersService');

router.get('/', (req, res) => {
    console.log('USERS ROUTE');

    res.status(200);
    res.json(usersService.getUsers());
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = usersService.getUsersById(id);
    res.json(user);
})

module.exports = router;
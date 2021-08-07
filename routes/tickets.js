const express = require('express');

const router = express.Router();
const Tickets = require('../models/tickets');


router.get('/', (req, res) =>{
    Tickets.find((err, tickets) => {
        console.log(err);
        console.log(tickets);
        
        res.render('tickets', {
            tickets: tickets
        })
    })
})

module.exports = router;
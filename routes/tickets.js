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

router.get('/add', (req, res) =>{
    res.render('add-ticket');
})

router.post('/add', (req, res) =>{
    console.log(req.body.name);
    console.log(req.body.issue);

    Tickets.create({
        name: req.body.name,
        issue: req.body.issue
    }, (err, created) => {
        if(err){
            res.send("error:(");
        }
        else{
            res.redirect('/tickets');
        }
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Tickets.remove({_id: req.params.id}, err => {
        if(err){
            console.log(err);
        }
        else{
            console.log("removed");
        }
    })
    res.redirect('/tickets');
})

router.get('/edit/:id', (req, res) => {
    Tickets.findById(req.params.id, (err, ticket) => {
        console.log(ticket);
        res.render('edit', {
            ticket: ticket
        })
    })
})

router.post('/edit/:id', (req, res) => {
    Tickets.findOneAndUpdate({_id: req.body.id}, {
        name: req.body.name,
        issue: req.body.issue
    }, (err, ticket) => {
        console.log(err);
        res.redirect('/tickets');

    })
})

module.exports = router;
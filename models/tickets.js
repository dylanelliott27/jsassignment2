const mongoose = require('mongoose');

let ticketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Tickets', ticketSchema);
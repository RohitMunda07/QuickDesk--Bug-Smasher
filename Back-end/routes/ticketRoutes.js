const express = require('express');
const router = express.Router();
const { createTicket, getTickets } = require('../controllers/ticketController');

router.post('/tickets', createTicket);
router.get('/tickets', getTickets);

module.exports = router;

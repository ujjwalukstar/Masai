const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticketController');
const validateTicketData = require('../middlewares/dataCheckMiddleware');

// Get all tickets
router.get('/', TicketController.getAllTickets);

// Get a specific ticket by ID
router.get('/:id', TicketController.getTicketById);

// Create a new ticket
router.post('/', validateTicketData, TicketController.createTicket);

// Update a ticket
router.put('/:id', TicketController.updateTicket);

// Resolve a ticket
router.patch('/:id/resolve', TicketController.resolveTicket);

// Delete a ticket
router.delete('/:id', TicketController.deleteTicket);

module.exports = router;
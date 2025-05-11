const TicketModel = require('../models/ticketModel');

class TicketController {
  static async getAllTickets(req, res) {
    try {
      const tickets = await TicketModel.getAllTickets();
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tickets' });
    }
  }

  static async getTicketById(req, res) {
    try {
      const ticket = await TicketModel.getTicketById(req.params.id);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ticket' });
    }
  }

  static async createTicket(req, res) {
    try {
      const newTicket = await TicketModel.createTicket(req.body);
      res.status(201).json(newTicket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create ticket' });
    }
  }

  static async updateTicket(req, res) {
    try {
      const { id } = req.params;
      const updatedTicket = await TicketModel.updateTicket(id, req.body);
      if (!updatedTicket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.status(200).json(updatedTicket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update ticket' });
    }
  }

  static async resolveTicket(req, res) {
    try {
      const { id } = req.params;
      const resolvedTicket = await TicketModel.resolveTicket(id);
      if (!resolvedTicket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.status(200).json(resolvedTicket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to resolve ticket' });
    }
  }

  static async deleteTicket(req, res) {
    try {
      const { id } = req.params;
      const isDeleted = await TicketModel.deleteTicket(id);
      if (!isDeleted) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete ticket' });
    }
  }
}

module.exports = TicketController;
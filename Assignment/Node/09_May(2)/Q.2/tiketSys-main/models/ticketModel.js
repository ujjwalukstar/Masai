const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '../db.json');

class TicketModel {
  static async getAllTickets() {
    try {
      const data = await fs.readFile(DB_PATH, 'utf8');
      return JSON.parse(data).tickets || [];
    } catch (error) {
      if (error.code === 'ENOENT') {
        await this.writeTickets([]);
        return [];
      }
      throw error;
    }
  }

  static async getTicketById(id) {
    const tickets = await this.getAllTickets();
    return tickets.find(ticket => ticket.id === parseInt(id));
  }

  static async createTicket(newTicket) {
    const tickets = await this.getAllTickets();
    const ticket = {
      id: tickets.length > 0 ? Math.max(...tickets.map(t => t.id)) + 1 : 1,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...newTicket
    };
    tickets.push(ticket);
    await this.writeTickets(tickets);
    return ticket;
  }

  static async updateTicket(id, updatedData) {
    const tickets = await this.getAllTickets();
    const index = tickets.findIndex(ticket => ticket.id === parseInt(id));
    
    if (index === -1) return null;
    
    const updatedTicket = {
      ...tickets[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    tickets[index] = updatedTicket;
    await this.writeTickets(tickets);
    return updatedTicket;
  }

  static async resolveTicket(id) {
    const tickets = await this.getAllTickets();
    const index = tickets.findIndex(ticket => ticket.id === parseInt(id));
    
    if (index === -1) return null;
    if (tickets[index].status === 'resolved') return tickets[index];
    
    const resolvedTicket = {
      ...tickets[index],
      status: 'resolved',
      updatedAt: new Date().toISOString()
    };
    tickets[index] = resolvedTicket;
    await this.writeTickets(tickets);
    return resolvedTicket;
  }

  static async deleteTicket(id) {
    const tickets = await this.getAllTickets();
    const initialLength = tickets.length;
    const filteredTickets = tickets.filter(ticket => ticket.id !== parseInt(id));
    
    if (filteredTickets.length === initialLength) return false;
    
    await this.writeTickets(filteredTickets);
    return true;
  }

  static async writeTickets(tickets) {
    await fs.writeFile(DB_PATH, JSON.stringify({ tickets }, null, 2), 'utf8');
  }
}

module.exports = TicketModel;
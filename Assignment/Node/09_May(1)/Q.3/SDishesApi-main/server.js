// server.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Path to our database file
const DB_PATH = path.join(__dirname, 'db.json');

// Helper function to read dishes from db.json
async function readDishes() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(data).dishes || [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, create it with empty dishes array
      await writeDishes([]);
      return [];
    }
    throw error;
  }
}

// Helper function to write dishes to db.json
async function writeDishes(dishes) {
  await fs.writeFile(DB_PATH, JSON.stringify({ dishes }, null, 2), 'utf8');
}

// POST /dishes - Add a new dish
app.post('/dishes', async (req, res) => {
  try {
    const dishes = await readDishes();
    const newDish = {
      id: dishes.length > 0 ? Math.max(...dishes.map(d => d.id)) + 1 : 1,
      ...req.body
    };
    
    dishes.push(newDish);
    await writeDishes(dishes);
    
    res.status(201).json(newDish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /dishes - Retrieve all dishes
app.get('/dishes', async (req, res) => {
  try {
    const dishes = await readDishes();
    res.status(200).json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /dishes/:id - Retrieve a dish by ID
app.get('/dishes/:id', async (req, res) => {
  try {
    const dishes = await readDishes();
    const dish = dishes.find(d => d.id === parseInt(req.params.id));
    
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: "Dish not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT /dishes/:id - Update a dish by ID
app.put('/dishes/:id', async (req, res) => {
  try {
    const dishes = await readDishes();
    const index = dishes.findIndex(d => d.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ message: "Dish not found" });
    }
    
    const updatedDish = { ...dishes[index], ...req.body };
    dishes[index] = updatedDish;
    await writeDishes(dishes);
    
    res.status(200).json(updatedDish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE /dishes/:id - Delete a dish by ID
app.delete('/dishes/:id', async (req, res) => {
  try {
    let dishes = await readDishes();
    const initialLength = dishes.length;
    dishes = dishes.filter(d => d.id !== parseInt(req.params.id));
    
    if (dishes.length === initialLength) {
      return res.status(404).json({ message: "Dish not found" });
    }
    
    await writeDishes(dishes);
    res.status(200).json({ message: "Dish deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /dishes/get?name=<dish_name> - Search dishes by name (with partial matching)
app.get('/dishes/get', async (req, res) => {
  try {
    const searchTerm = req.query.name?.toLowerCase();
    if (!searchTerm) {
      return res.status(400).json({ message: "Name parameter is required" });
    }
    
    const dishes = await readDishes();
    const matchingDishes = dishes.filter(d => 
      d.name.toLowerCase().includes(searchTerm)
    );
    
    if (matchingDishes.length > 0) {
      res.status(200).json(matchingDishes);
    } else {
      res.status(404).json({ message: "No dishes found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
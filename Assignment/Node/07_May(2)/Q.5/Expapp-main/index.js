// index.js
const express = require('express');
const os = require('os');
const dns = require('dns');
const { readFile } = require('./read');
const app = express();
const PORT = 3000;

// Basic Test Route
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Route to read the Data.txt file
app.get('/readfile', async (req, res) => {
  try {
    const fileContent = await readFile();
    res.send(fileContent);
  } catch (err) {
    res.status(500).send('Error reading file');
  }
});

// Route to get system details
app.get('/systemdetails', (req, res) => {
  const systemDetails = {
    platform: os.platform(),
    totalMemory: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
    freeMemory: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
    cpuModel: os.cpus()[0].model,
    cpuCoreCount: os.cpus().length,
  };

  res.json(systemDetails);
});

// Route to get the IP address of a domain (masaischool.com)
app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', (err, address, family) => {
    if (err) {
      res.status(500).send('Error fetching IP');
    } else {
      res.json({
        hostname: 'masaischool.com',
        ipAddress: address,
      });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

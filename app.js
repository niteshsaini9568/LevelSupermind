// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve JSON file
app.get('/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data.json');

    // Read the JSON file and send it as a response
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Failed to read data' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

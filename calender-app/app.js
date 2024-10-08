const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

let events = [];

// Get all events
app.get('/events', (req, res) => {
    res.json(events);
});

// Add a new event
app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    res.status(201).json(event);
});

// Add a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to my Events calender');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

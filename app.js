const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

require('dotenv').config();
app.use(express.static(__dirname + '/public/'));

// middlewares
app.use(express.json()); // to have data in req.body

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/index.html'));
});

const start = async () => {
    try {
        // Start the web server
        app.listen(port, () => {
            console.log(`Listening on port:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

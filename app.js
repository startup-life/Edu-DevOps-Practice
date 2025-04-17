const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    res.status(200).send(`OK`);
});

app.get('/hello', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    let count = 0;

    const interval = setInterval(() => {
        res.write(`Hello World! - ${count++}\n`);
    }, 1000);

    req.on('close', () => {
        clearInterval(interval);
        console.log('Client disconnected');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, version: ${VERSION}`);
});

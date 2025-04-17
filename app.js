const express = require('express');
const app = express();
const PORT = 3000;
const VERSION = process.env.VERSION || 'unknown';

app.get('/health', (req, res) => {
    res.status(200).send(`OK - version: ${VERSION} \n`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, version: ${VERSION}`);
});
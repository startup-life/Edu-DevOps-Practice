const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    let count = 0;

    const interval = setInterval(() => {
        res.write(`${count++}\n`);
    }, 1000); // 1초마다 숫자 전송

    req.on('close', () => {
        clearInterval(interval); // 클라이언트가 연결 종료하면 반복 중단
        console.log('Client disconnected');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

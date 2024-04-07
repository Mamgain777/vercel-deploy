const express = require('express');
const path = require('path');
const port = 7777;

const app = express();

app.get('/', (req, res) => {
    const filepath = path.join(__dirname, "..", 'frontend', 'index.html');
    return res.sendFile(filepath);
});
app.get('/newUpdate', (req, res) => {
    res.json({ "success": true, "message": "We are on new update path" });
});

app.listen(port, () => {
    console.log("server is running on port " + port);
})

module.exports = app;

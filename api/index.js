const express = require('express');
const port = 7777;
const getFilePath = require('../getHtmlFile.js')
const app = express();
const testRoute = require('./routes/testRoute.js')

app.use('/api',testRoute);

app.get('/', (req, res) => {
    let filepath = getFilePath("index.html")
    return res.sendFile(filepath);
});
app.get('/newUpdate', (req, res) => {
    res.json({ "success": true, "message": "We are on new update path" });
});

app.listen(port, () => {
    console.log("server is running on port " + port);
})

module.exports = app;

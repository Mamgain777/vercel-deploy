const express = require('express');
const port = 7777;

const app = express();

app.get('/', (req,res)=>{
    res.json({"msg": "Hello World to vercel!!"});
});

module.exports = app;
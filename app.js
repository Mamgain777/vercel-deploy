const express = require('express');
const port = 7777;

const app = express();

app.get('/', (req,res)=>{
    res.json({"msg": "Hello World to vercel!!"});
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});
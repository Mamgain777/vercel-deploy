const express = require('express');
const router = express.Router();
const getFilePath = require('../../getHtmlFile')

router.route('/')
.get((req,res)=>{
    return res.sendFile(getFilePath('route_testing.html'))
});

module.exports = router;
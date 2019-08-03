var express = require('express');
var router = express.Router();
const fs = require('fs');
const jsonParser = express.json();

/* GET creation listing. */

router.post('/', jsonParser, function (req, res, next) { 
    var user_data = req.body;
    let data1 = user_data.textform; 
    console.log(data1);
    res.send(user_data); 
    let jsonBuilder = {
        "Data from textArea" : data1
    };
    let data = JSON.stringify(jsonBuilder);
    fs.writeFileSync('test.json', data);
});

module.exports = router;

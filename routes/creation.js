var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET creation listing. */
router.get('/', function (req, res, next) {
    res.send('Got a POST request');
    let student = {
        "name": 'Mike\n',
        "age": 23,
        "\ngender": 'Male\n',
        "department": 'English\n',
        "car": 'Honda\n'
    };
    let data = JSON.stringify(student);
    fs.writeFileSync('test.json', data);
});

module.exports = router;

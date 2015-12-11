var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("function call!!!");
    res.sendFile('/index.html')
});

module.exports = router;

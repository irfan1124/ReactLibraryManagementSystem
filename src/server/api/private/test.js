var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next){
    setTimeout(function(){
        return res.status(200).send({data: 'This is a test API', error: null});
    }, 1000);
});

var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var furniture_controller = require('../controllers/furniture'); 

router.get('/', api_controller.api);


router.post('/furniture', furniture_controller.furniture_create_post);

router.delete('/furniture/:id', furniture_controller.furniture_delete);

router.put('/furniture/:id', furniture_controller.furniture_update_put);

router.get('/furniture/:id', furniture_controller.furniture_detail);

router.get('/furniture', furniture_controller.furniture_list);

module.exports = router;
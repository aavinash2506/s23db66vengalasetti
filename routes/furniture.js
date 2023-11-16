var express = require('express');
const furniture_controllers = require('../controllers/furniture');
var router = express.Router();


router.get('/', furniture_controllers.furniture_view_all_Page);
router.get('/furnitures/:id', furniture_controllers.furniture_detail);
router.get('/detail', furniture_controllers.furniture_view_one_Page);
module.exports = router;

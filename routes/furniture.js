const express = require('express');
const furniture_controllers = require('../controllers/furniture');


const router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/', furniture_controllers.furniture_view_all_Page);
router.get('/furnitures/:id', furniture_controllers.furniture_detail);

router.get('/detail',secured, furniture_controllers.furniture_view_one_Page);
router.get('/create',secured, furniture_controllers.furniture_create_Page);
router.get('/update',secured, furniture_controllers.furniture_update_page);
router.get('/delete',secured, furniture_controllers.furniture_delete_Page);



module.exports = router;

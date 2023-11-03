const express = require('express');
const router = express.Router();

const furniture = [
  {
    item_type: 'table',
    material: 'glass',
    price: '$60',
  },
  {
    item_type: 'desk',
    material: 'metal',
    price: '$400',
  },
  {
    item_type: 'sofa',
    material: 'leather',
    price: '$650',
  },
  {
    item_type: 'coffee table',
    material: 'marble',
    price: '$250',
  }
];

router.get('/', (req, res) => {
  res.render('furniture', { title: 'Search Results - furniture', r: furniture });
});

module.exports = router;

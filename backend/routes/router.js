const express = require('express');
const router = express.Router();

const controllerUser = require('../controllers/controllerUser');
const controllerPizza = require('../controllers/controllerPizza');

router
  .route('/getpizzas')
  .get(controllerPizza.gets);

router
  .route('/registration')
  .get((req, res) => {
    res.send('ok from controller');
  })
  .post(controllerUser.registration);

router
  .route('/login')
  .get((req, res) => {
    res.send('ok');
  })
  .post(controllerUser.login);

module.exports = router;

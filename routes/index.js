const { Router } = require('express');
const express = require('express');
const router = express.Router();
const controllerMascota= require('../controllers/controllerMascota');

module.exports = function(){
  
// metodo get  
router.get('/mascotas', controllerMascota.odtenerMascotas);


    return router;


}



const express = require('express');
const router = express.Router();
const passport = require('passport');
///Controllers 
const AuthController = require('../controllers/authController');
const DeviceController=require('../controllers/DeviceController');
//Login
router.post('/login', AuthController.login);
//Registration
router.post('/register', AuthController.register);
//add Device
router.post('/addDevice', DeviceController.addDevice);
router.get('/getDevice/:imei', DeviceController.findDevice);
router.post('/createFile/:imei', DeviceController.CreateFicheIntervention);
router.post('/getIntervention/:imei', DeviceController.getInterventionsData);
module.exports = router;


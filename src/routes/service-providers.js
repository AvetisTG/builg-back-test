const express = require('express');
const router = express.Router();
const ServiceProviderController = require('../controllers/ServiceProvider');


router.get('/', ServiceProviderController.getServiceProviders);

module.exports = router;

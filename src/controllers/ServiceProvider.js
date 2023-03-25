const { Op } = require('sequelize');
const { sequelize, ServiceProvider } = require('../models');


class ServiceProviderController {

  async getServiceProviders(req, res) {

    const { lat, lng } = req.query;

    const serviceProviders = await ServiceProvider.findByDistance(lat, lng);

    return res.json({ serviceProviders });
  }

}

module.exports = new ServiceProviderController();

const data = require("./../../data/config");
const City = require("./../models/City");

const displayController = {
  getHourtin(__, res) {
    if (data) {
      res.send(data);
    }
  },

  async getAllOthers(__, res, next) {
    const allCities = await City.findAll();

    if (allCities) {
      return res.json(allCities);
    }

    next();
  },
};

module.exports = displayController;

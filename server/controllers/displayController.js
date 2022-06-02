const data = require("./../../data/config");

const displayController = {
  getHourtin(__, res) {
    if (data) {
      res.send(data);
    }
  },
};

module.exports = displayController;

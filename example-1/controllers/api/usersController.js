const { User } = require("../../models");

module.exports = {
  index: (req, res) => {
    const users = []; // Ceritanya data user
    res.json(users);
  },

  store: (req, res) => {
    // Ceritanya nyimpen data user
  },

  show: (req, res) => {
    const user = {}; // Ceritanya data user
    res.json(user);
  },

  update: (req, res) => {
    // Ceritanya update data user
  },

  destroy: (req, res) => {
    // Ceritanya hapus data user
  },
};

const { User } = require("../../models");

module.exports = {
  index: (req, res) => {
    res.render("users/index");
  },

  create: (req, res) => {
    res.render("users/create");
  },

  store: (req, res) => {
    // Ceritanya nyimpen data user
  },

  show: (req, res) => {
    res.render("users/show");
  },

  edit: (req, res) => {
    res.render("users/edit");
  },

  update: (req, res) => {
    // Ceritanya update data user
  },

  destroy: (req, res) => {
    // Ceritanya hapus data user
  },
};

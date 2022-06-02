const { Article } = require("../../models");

module.exports = {
  index: (req, res) => {
    res.render("articles/index");
  },

  create: (req, res) => {
    res.render("articles/create");
  },

  store: (req, res) => {
    // Ceritanya nyimpen data article
  },

  show: (req, res) => {
    res.render("articles/show");
  },

  edit: (req, res) => {
    res.render("articles/edit");
  },

  update: (req, res) => {
    // Ceritanya update data article
  },

  destroy: (req, res) => {
    // Ceritanya hapus data article
  },
};

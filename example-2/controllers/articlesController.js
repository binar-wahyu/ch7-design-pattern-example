const { Article } = require("../models");

module.exports = {
  apiIndex: (req, res) => {
    const articles = []; // Ceritanya data article
    res.json(articles);
  },

  apiStore: (req, res) => {
    // Ceritanya nyimpen data article
  },

  apiShow: (req, res) => {
    const article = {}; // Ceritanya data article
    res.json(article);
  },

  apiUpdate: (req, res) => {
    // Ceritanya update data article
  },

  apiDestroy: (req, res) => {
    // Ceritanya hapus data article
  },

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

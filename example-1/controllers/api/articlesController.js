const { Article } = require("../../models");

module.exports = {
  index: (req, res) => {
    const articles = []; // Ceritanya data article
    res.json(articles);
  },

  store: (req, res) => {
    // Ceritanya nyimpen data article
  },

  show: (req, res) => {
    const article = {}; // Ceritanya data article
    res.json(article);
  },

  update: (req, res) => {
    // Ceritanya update data article
  },

  destroy: (req, res) => {
    // Ceritanya hapus data article
  },
};

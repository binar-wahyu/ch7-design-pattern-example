const { User } = require("../models");

module.exports = {
  apiIndex: (req, res) => {
    const users = []; // Ceritanya data user
    res.json(users);
  },

  apiStore: (req, res) => {
    // Ceritanya nyimpen data user
  },

  apiShow: (req, res) => {
    const user = {}; // Ceritanya data user
    res.json(user);
  },

  apiUpdate: (req, res) => {
    // Ceritanya update data user
  },

  apiDestroy: (req, res) => {
    // Ceritanya hapus data user
  },

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

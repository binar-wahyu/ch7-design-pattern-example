const { User } = require("../models");

exports.apiIndex = (req, res) => {
  const users = []; // Ceritanya data user
  res.json(users);
};

exports.apiStore = (req, res) => {
  // Ceritanya nyimpen data user
};

exports.apiShow = (req, res) => {
  const user = {}; // Ceritanya data user
  res.json(user);
};

exports.apiUpdate = (req, res) => {
  // Ceritanya update data user
};

exports.apiDestroy = (req, res) => {
  // Ceritanya hapus data user
};

exports.index = (req, res) => {
  res.render("users/index");
};

exports.create = (req, res) => {
  res.render("users/create");
};

exports.store = (req, res) => {
  // Ceritanya nyimpen data user
};

exports.show = (req, res) => {
  res.render("users/show");
};

exports.edit = (req, res) => {
  res.render("users/edit");
};

exports.update = (req, res) => {
  // Ceritanya update data user
};

exports.destroy = (req, res) => {
  // Ceritanya hapus data user
};

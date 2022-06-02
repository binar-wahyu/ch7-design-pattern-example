const { User } = require("../../models");

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

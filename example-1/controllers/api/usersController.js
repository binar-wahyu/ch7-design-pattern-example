const { User } = require("../../models");

exports.index = (req, res) => {
  const users = []; // Ceritanya data user
  res.json(users);
};

exports.store = (req, res) => {
  // Ceritanya nyimpen data user
};

exports.show = (req, res) => {
  const user = {}; // Ceritanya data user
  res.json(user);
};

exports.update = (req, res) => {
  // Ceritanya update data user
};

exports.destroy = (req, res) => {
  // Ceritanya hapus data user
};

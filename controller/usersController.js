function getUsers(req, res, next) {
  res.render("users");
  next();
}

module.exports = {
  getUsers,
};

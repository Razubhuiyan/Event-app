// get login page

function getLogin(req, res, next) {
  res.render("login");
}

module.exports = {
  getLogin,
};

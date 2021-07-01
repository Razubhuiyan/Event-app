// get home page

function getHome(req, res, next) {
  res.render("index");
}

module.exports = {
  getHome,
};

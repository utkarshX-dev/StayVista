const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
}

module.exports.signup = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      let newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome to StayVista!");
        res.redirect("/listings");
      });
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  }

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
}

module.exports.login = async (req, res, next) => {
    req.flash("success", "Logged in succesfully! Welcome Back to StayVista!");
    res.redirect(res.locals.redirectUrl || "/listings");
}

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged out Succesfully! See you soon!");
    res.redirect("/listings");
  });
}


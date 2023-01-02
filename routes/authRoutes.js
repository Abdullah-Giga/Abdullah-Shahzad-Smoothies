const { Router } = require("express");
const {signup, login, about, signup_post, login_post, logout} = require("../controllers/authControllers");

const router = Router();

router.get("/signup", signup);

router.get("/login", login);

router.post("/signup", signup_post);

router.post("/login", login_post);

router.get('/about', about);

router.get("/logout", logout);

module.exports = router;

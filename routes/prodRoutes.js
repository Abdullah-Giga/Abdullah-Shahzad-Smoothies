const { Router } = require("express");
const {MyProds_get, AllProds_get, createNew, createNew_post, details, edit, editRecipe_post, deleteRecipe} = require("../controllers/productController");
const { requireAuth, checkUser } = require("../middlewares/authMiddleware");

const router = Router();

router.get('/smoothies', requireAuth,MyProds_get);

router.get('/smoothies/all', requireAuth,AllProds_get);

router.get('/smoothies/new', requireAuth, createNew);

router.get('/smoothies/:id',requireAuth,  details);

router.post('/smoothies', requireAuth, createNew_post);

router.get('/smoothies/edit/:id', requireAuth, edit);

router.put('/smoothies/:id', requireAuth, editRecipe_post);

router.delete('/smoothies/:id', requireAuth,deleteRecipe);

module.exports = router;
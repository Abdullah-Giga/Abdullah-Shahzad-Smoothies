const { Router } = require("express");
const prodController = require("../controllers/productController");
const { requireAuth, checkUser } = require("../middlewares/authMiddleware");

const router = Router();

router.get('/smoothies', requireAuth,prodController.getProds);

router.get('/smoothies/all', prodController.getAllProds);

router.get('/smoothies/new', requireAuth, prodController.render_createNew);

router.get('/smoothies/:id',  prodController.render_details);

router.post('/smoothies', requireAuth, prodController.createNew);

router.get('/smoothies/edit/:id', requireAuth, prodController.render_edit);

router.put('/smoothies/:id', requireAuth, prodController.editRecipe);

router.delete('/smoothies/:id', requireAuth, prodController.deleteRecipe);

module.exports = router;
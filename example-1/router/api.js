const router = require("express").Router();
const articlesController = require("../controllers/api/articlesController");
const usersController = require("../controllers/api/usersController");

router.get("/articles", articlesController.index);
router.post("/articles", articlesController.store);
router.get("/articles/:id", articlesController.show);
router.put("/articles/:id", articlesController.update);
router.delete("/articles/:id", articlesController.destroy);

router.get("/users", usersController.index);
router.post("/users", usersController.store);
router.get("/users/:id", usersController.show);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.destroy);

module.exports = router;

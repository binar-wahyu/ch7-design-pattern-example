const router = require("express").Router();
const pagesController = require("../controllers/web/pagesController");
const articlesController = require("../controllers/web/articlesController");
const usersController = require("../controllers/web/usersController");

router.get("/", pagesController.index);
router.get("/about-us", pagesController.aboutUs);

router.get("/articles", articlesController.index);
router.get("/articles/create", articlesController.create);
router.post("/articles", articlesController.store);
router.get("/articles/:id", articlesController.show);
router.get("/articles/:id/edit", articlesController.edit);
router.put("/articles/:id", articlesController.update);
router.delete("/articles/:id", articlesController.destroy);

router.get("/users", usersController.index);
router.get("/users/create", usersController.create);
router.post("/users", usersController.store);
router.get("/users/:id", usersController.show);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.destroy);

module.exports = router;

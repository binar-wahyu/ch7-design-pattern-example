const router = require("express").Router();
const articlesController = require("../controllers/articlesController");

router.get("/api", articlesController.apiIndex);
router.post("/api", articlesController.apiStore);
router.get("/api/:id", articlesController.apiShow);
router.put("/api/:id", articlesController.apiUpdate);
router.delete("/api/:id", articlesController.apiDestroy);

router.get("/", articlesController.index);
router.get("/create", articlesController.create);
router.post("/", articlesController.store);
router.get("/:id", articlesController.show);
router.get("/:id/edit", articlesController.edit);
router.put("/:id", articlesController.update);
router.delete("/:id", articlesController.destroy);

module.exports = router;

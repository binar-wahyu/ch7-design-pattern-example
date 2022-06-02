const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.get("/api", usersController.apiIndex);
router.post("/api", usersController.apiStore);
router.get("/api/:id", usersController.apiShow);
router.put("/api/:id", usersController.apiUpdate);
router.delete("/api/:id", usersController.apiDestroy);

router.get("/", usersController.index);
router.get("/create", usersController.create);
router.post("/", usersController.store);
router.get("/:id", usersController.show);
router.get("/:id/edit", usersController.edit);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.destroy);

module.exports = router;

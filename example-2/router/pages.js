const router = require("express").Router();
const pagesController = require("../controllers/pagesController");

router.get("/", pagesController.index);
router.get("/about-us", pagesController.aboutUs);

module.exports = router;

const router = require("express").Router();
const pagesRouter = require("./pages");
const articlesRouter = require("./articles");
const usersRouter = require("./users");

router.use("/", pagesRouter);
router.use("/articles", articlesRouter);
router.use("/users", usersRouter);

module.exports = router;

const router = require("express").Router();
const jokeRoutes = require("./jokes");

// Book routes
router.use("/jokes", jokeRoutes);

module.exports = router;
const router = require("express").Router();
const bookRoutes = require("./jobs");

// Book routes
router.use("/jobs", jobRoutes);

module.exports = router;
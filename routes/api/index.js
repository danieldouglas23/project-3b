const router = require("express").Router();
// const jobRoutes = require("./jobs");


// Book routes
// router.use("/jobs", jobRoutes);
router.get("/test", function(req, res) {
    res.json("heeeeeeey");
})

module.exports = router;
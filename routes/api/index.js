const path = require("path")
const router = require("express").Router()
const raceRoutes = require("./race")


router.use("/race", raceRoutes)
module.exports = router;
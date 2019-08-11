const router = require("express").Router()
const raceController = require("../../controllers/raceController");

router.route("/")
    .get(raceController.findAll)
    .post(raceController.create);

router.route("/:id")
    .get(raceController.findById)
    .put(raceController.update)
    .delete(raceController.remove);

router.route("/:id/:date")
    .get(raceController.findOneByIdAndDate)

module.exports = router;
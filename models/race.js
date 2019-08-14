const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raceSchema = new Schema({
    raceName: { type: String },
    raceDate: { type: String },
    raceType: { type: String },
    raceTrainingWeeks: { type: Number },
    raceDays: [{ type: Schema.Types.ObjectId, ref: "Days" }]
});

const Race = mongoose.model("Race", raceSchema);

module.exports = Race;
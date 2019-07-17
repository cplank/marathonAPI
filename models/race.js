const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raceSchema = new Schema({
    raceName: { type: String },
    raceDate: { type: Date },
    raceType: { type: String },
    raceTrainingWeeks: { type: Number },
    raceTrainingDetails:
        [{
            date: { type: Date },
            crossTrain: { type: Boolean },
            restDay: { type: Boolean },
            minutes: { type: Number },
            miles: { type: Number },
            completed: { type: Boolean }
        }]
});

const Race = mongoose.model("Race", raceSchema);

module.exports = Race;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daysSchema = new Schema({
    date: { type: String },
    crossTrain: { type: Boolean },
    restDay: { type: Boolean },
    minutes: { type: Number },
    miles: { type: Number },
    completed: { type: Boolean },
    race: { type: Schema.Types.ObjectId, ref: "Race" }
});

const Days = mongoose.model("Days", daysSchema);

module.exports = Days;
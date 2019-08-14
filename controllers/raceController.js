const db = require('../models');


module.exports = {
    findAll: function (req, res) {
        console.log(req)
        db.Race.find(req.query)
            .then(dbrace => res.json(dbrace))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Race.findById(req.params.id)
            .then(dbrace => res.json(dbrace))
            .catch(err => res.status(442).json(err));
    },

    findOneByIdAndDate: function (req, res) {
        console.log("HOLY SHIT", req.params.date)
        db.Days.findOne({ race: req.params.id, date: req.params.date })
            .then(dbDays => { console.log(dbDays); res.json(dbDays) })
            .catch(err => res.status(442).json(err));
    },

    create: function (req, res) {
        db.Race.create(req.body)
            .then(dbRace => { console.log('return: ', (dbRace)); res.json(dbRace) })
            .catch(err => { console.log(err); res.status(422).json(err) });
    },
    update: function (req, res) {
        console.log(req.params.id)
        console.log(req.body)
        db.Race.findOneAndUpdate(
            { _id: req.params.id },
            req.body)
            // { upsert: false, new: true, runValidators: true })
            .then(dbrace => { res.json(dbrace); console.log(dbrace) })
            .catch(err => console.log(err))
    },

    remove: function (req, res) {
        db.Race.findById(req.params.id)
            .then(dbrace => dbrace.remove())
            .then(dbrace => res.json(dbrace))
            .catch(err => res.status(422).json(err));
    }
};
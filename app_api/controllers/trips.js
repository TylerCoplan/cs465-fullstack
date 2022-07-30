const mongoose = require("mongoose");
const model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    model.find({}).exec((err, trips) =>  {
        if (!trips) {
            return res.status(404).json({ "message" : "trip not found"});
        } else if (err) {
            return res.staus(404).json(err);
        } else {
            return res.status(202).json(trips)                    
        }
    });
};

const tripsFindCode = async (req, res) => {
    model.find({"code" : req.params.tripCode}).exec((err, trips) =>  {
        if (!trips) {
            return res.status(404).json({ "message" : "trip not found"});
        } else if (err) {
            return res.staus(404).json(err);
        } else {
            return res.status(202).json(trips)                    
        }
    });
};
module.exports = {
    tripsList,
    tripsFindCode
};
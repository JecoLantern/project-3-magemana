const db = require("../models");

module.exports ={
    findAll: function (req, res) {
        db.CharModel
          .find({})
          // .sort({ name: (a, b) => a.name.localeCompare(b.name) })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function (req, res) {
        db.CharModel
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      charCreate: function (req, res) {
        db.CharModel
          .create(req.body)
          .then(dbModel => {
            return db.User.findByIdAndUpdate({_id:req.user._id}, { $push: {characters: dbModel._id
            }})
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function (req, res) {
        db.CharModel
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function (req, res) {
        db.CharModel
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      // view my profile and get all my character
      findAndPopulateUser: function (req, res) {
        db.User.findOne({user_id: req.user._id})
        .populate("characters")
        .then(data => res.json(data))
        .catch(err => res.status(442).json(err))
      },
      findAllCharByUserId: function (req, res) {
        db.CharModel.findMany({user_id: req.user._id})
        .then(data => res.json(data))
        .catch(err => res.status(442).json(err))
      },
      findCharByUserCharId: function (req, res) {
        db.CharModel.findOne({user_id: req.user._id, _id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(442).json(err))
      }
}
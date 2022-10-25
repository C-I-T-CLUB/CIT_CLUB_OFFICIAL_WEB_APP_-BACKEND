// import 3d mods

const { validationResult } = require("express-validator");

const CitClubAccount = require("../../database/models/signUpModel");
const Developer = require("../../database/models/DeveloperModel");

const findDev = (req, res, next) =>
  Developer.find({ ...req.body }, { __v: 0 })
    .then((devs) => res.json(devs))
    .catch((err) => res.status(500).send(err));

const addDev = (req, res, next) => {
  const validationError = validationResult(req);

  if (!validationError.isEmpty())
    return res.status(500).send(validationError.array());

  CitClubAccount.findOne({ _id: req.user.id }, {})
    .then((devs) => {
      if (!devs) res.status(404).send({ error: "User account not found" });
      else {
        new Developer({ ...req.body, uid: req.user.id })
          .save()
          .then((payload) => res.status(201).send(payload))
          .catch((err) => res.status(500).send(err));
      }
    })
    .catch((err) => res.status(500).send(err));
};

const removeDev = (req, res, next) =>
  Developer.deleteOne({ uid: req.user.id }, {})
    .then((devs) => res.status(200).send("Account deleted"))
    .catch((err) => res.status(500).send(err));

const updateUser = (req, res) => {
  Developer.findOneAndUpdate({ _id: req.user.id }, { ...req.body }).then(
    (devs) => {
      res.send("Hello");
    }
  );
};

module.exports = {
  updateUser,
  removeDev,
  findDev,
  addDev,
};

const express = require("express");
const accountModel = require("../models/account");
const router = express.Router();

router.get("/", (req, res, next) => {
  accountModel
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json("Server Err"));
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  accountModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json("Server Err"));
});
router.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  accountModel
    .create({
      username: username,
      password: password,
    })
    .then((data) => res.json("Create Success"))
    .catch((err) => res.status(500).json("Server Err"));
});
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const newPassword = req.body.newPassword;

  accountModel
    .findByIdAndUpdate(id, {
      password: newPassword,
    })
    .then((data) => res.json("Update Success"))
    .catch((err) => {
      res.status(500).json("Server Err");
    });
});
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  accountModel
    .findByIdAndDelete(id)
    .then((data) => res.json("Delete Success"))
    .catch((err) => res.json("Server Err"));
});

module.exports = router;

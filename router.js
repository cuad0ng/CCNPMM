const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("GET");
});

router.post("/", (req, res) => {
  res.json("POST");
});

router.put("/", (req, res) => {
  res.json("PUT");
});

router.delete("/", (req, res) => {
  res.json("DELETE");
});

module.exports = router;

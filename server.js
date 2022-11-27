const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = require("./router");
const accountRouter = require("./router/account");
const accountModel = require("./models/account");

const port = process.env.PORT || 3000;
const app = express();

app.use("/public", express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  accountModel
    .findOne({ username: username })
    .then((data) => {
      if (data) {
        res.json("user exist");
      } else {
        return accountModel.create({
          username: username,
          password: password,
        });
      }
    })
    .then((data) => res.json("Create Success"))
    .catch((err) => res.status(500).json("Create Failed!"));
});

app.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  accountModel
    .findOne({ username: username, password: password })
    .then((data) => {
      if (data) {
        res.json("Login Success");
      } else {
        res.status(400).json("Login Failed");
      }
    })
    .catch((err) => res.status(500).json("Server Err"));
});

app.use("/api/account/", accountRouter);

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "./public/index.html");
  res.sendFile(filePath);
});
// app.use("/admin/api/v1/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

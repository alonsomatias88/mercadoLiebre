const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 2020;

app.listen(port, () => console.log("Server is running on LocalHost:" + port));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
);
const public = path.resolve(__dirname, "./public");
app.use(express.static(public));

app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/register.html"))
);
const register = path.resolve(__dirname, "./register");
app.use(express.static(register));

app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/login.html"))
);
const login = path.resolve(__dirname, "./login");
app.use(express.static(login));

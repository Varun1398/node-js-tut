const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");
app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  const user = {
    name: "varun",
    number: 123124124,
    email: "v@getMaxListeners.com",
    city: "Faridabad",
    skills: ['php', 'js', 'c++']
  };
  res.render("profile", { user });
});
app.get("/login", (req, res) => {
    res.render('login')
})

app.listen(3000);


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello This is Home page</h1> 
  <a href="/about">Go to about Page </a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder = "User Name"/>
  <button>Click me</button>
  <a href="/">Go to Home Page </a>
  `);
});

app.get("/help", (req, res) => {
  res.send([{
    name: "varun",
    email: "varun@gmail.com"
  },{
    name: "Sam",
    email: "Sam@gmail.com"
  }]);
});

app.listen(5000)
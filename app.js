const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//In middleware we add functions that are hooked into this
//funnel through which the request goes and we either have
//next to reach the next middleware or send a response
// We travel from middleware to middleware from top to bottom
// using next

//urlencoded is a like other callback function
//It uses next at the end
app.use(bodyParser.urlencoded({ extended: true }));

//One should see the order in which middlewares will be
//executed.

//To avoid the order issue we are running this block of code
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<html><h1>Hello ExpressJS</h1></html");
});

app.listen(3000);

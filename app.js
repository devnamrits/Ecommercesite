const express = require("express");

const app = express();

//In middleware we add functions that are hooked into this
//funnel through which the request goes and we either have
//next to reach the next middleware or send a response
// We travel from middleware to middleware from top to bottom
// using next

//One should see the order in which middlewares will be
//executed.

//To avoid the order issue we are running this block of code
app.use("/", (req, res, next) => {
  console.log("This always works");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In Add Product Page");
  res.send("<html><h1>The 'Add Product' page.</h1></html");
  // ...
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<html><h1>Hello ExpressJS</h1></html");
  // ...
});

app.listen(3000);

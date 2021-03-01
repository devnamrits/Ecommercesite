const http = require("http");

const express = require("express");

const app = express();

//In middleware we add functions that are hooked into this
//funnel through which the request goes and we either have
//next to reach the next middleware or send a response
// We travel from middleware to middleware from top to bottom
// using next

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); //Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<html>Hi again</html");
  // ...
});

const server = http.createServer(app);

server.listen(3000);

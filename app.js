const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('error404', {
    pageTitle: 'Error 404'
  });
  //res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

app.listen(3000);

/**
 * @file    index.js
 * @desc    Express Start File
 *          Mockdata generated https://www.mockaroo.com/
 */
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./Members");
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware - App Logger
app.use(logger);

//Middleware - Body Parse
app.use(express.json());

//Middleware - URL Encoded
app.use(express.urlencoded({ extended: false }));

//Middleware - Express Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//App set static folder - with middleware
app.use(express.static(path.join(__dirname, "public")));

//App APIs
app.use("/api/members", require("./routes/api/members"));

//Route - Members page
app.get("/members", (req, res) => {
  res.render("index", {
    title: "Members App",
    members: members,
  });
});

app.listen(PORT, () => {
  console.log("App runngin on ", PORT);
});

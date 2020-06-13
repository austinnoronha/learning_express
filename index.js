/**
 * @file    index.js
 * @desc    Express Start File
 *          Mockdata generated https://www.mockaroo.com/
 */
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger);

//App set static folder - with middleware
app.use(express.static(path.join(__dirname, "public")));

//App APIs
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => {
  console.log("App runngin on ", PORT);
});

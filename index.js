/**
 * @file    index.js
 * @desc    Express Start File
 *          Mockdata generated https://www.mockaroo.com/
 */
const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const members = require("./Members");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger);

//App set static folder - with middleware
app.use(express.static(path.join(__dirname, "public")));

//App dynamic APIs
//Get all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

//Get member data
app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the ID of ${req.params.id}` });
  }
});

app.listen(PORT, () => {
  console.log("App runngin on ", PORT);
});

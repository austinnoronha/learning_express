/**
 * @file    members.js
 * @desc    Express Rouets - API
 */
const express = require("express");
const members = require("../../Members");
const router = express.Router();

//App dynamic APIs
//Get all members
router.get("/", (req, res) => {
  res.json(members);
});

//Get member data
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the ID of ${req.params.id}` });
  }
});

module.exports = router;

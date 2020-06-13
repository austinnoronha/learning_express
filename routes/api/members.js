/**
 * @file    members.js
 * @desc    Express Rouets - API
 */
const express = require("express");
const members = require("../../Members");
const uuid = require("uuid");
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

//Create a member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: "active",
  };

  if (!newMember.name || !newMember.email || !newMember.gender) {
    return res
      .status(400)
      .json({ msg: "Please send name, email and gender in JSON" });
  }

  members.push(newMember);

  return res.status(200).json(members);
});

module.exports = router;

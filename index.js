/**
 * @file    index.js
 * @desc    Express Start File
 */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

//App set static folder - with middleware
app.use(express.static(path.join(__dirname, 'public')));

//App Status Members Data
const members = [{
    "id": 1,
    "first_name": "Moe",
    "last_name": "Galway",
    "email": "mgalway0@ycombinator.com",
    "gender": "Male",
    "status": "inavtive"
  }, {
    "id": 2,
    "first_name": "Otto",
    "last_name": "Calltone",
    "email": "ocalltone1@sohu.com",
    "gender": "Male",
    "status": "inavtive"
  }, {
    "id": 3,
    "first_name": "Clemmy",
    "last_name": "Chesterman",
    "email": "cchesterman2@sitemeter.com",
    "gender": "Male",
    "status": "active"
  }, {
    "id": 4,
    "first_name": "Leeland",
    "last_name": "Simek",
    "email": "lsimek3@etsy.com",
    "gender": "Male",
    "status": "inavtive"
  }, {
    "id": 5,
    "first_name": "Cassie",
    "last_name": "Rosengart",
    "email": "crosengart4@thetimes.co.uk",
    "gender": "Male",
    "status": "active"
  }, {
    "id": 6,
    "first_name": "Ardelia",
    "last_name": "McCumesky",
    "email": "amccumesky5@netscape.com",
    "gender": "Female",
    "status": "active"
  }];

//App dynamic APIs
app.get('/api/members', (req, res) => {
  res.json(members);
})

app.listen(PORT, () => {
    console.log("App runngin on ", PORT );
});
/**
 * @file    index.js
 * @desc    Express Start File
 */
const express = require('express');
const path = require('path');
const members = require('./Members');
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware - logger
const logger = (req, res, next) => {
    console.log("[APP_LOGGER] hello!");

    //Call next middlewarte function in the stack
    next();    
};

app.use(logger);

//App set static folder - with middleware
app.use(express.static(path.join(__dirname, 'public')));

//App dynamic APIs
app.get('/api/members', (req, res) => {
  res.json(members);
})

app.listen(PORT, () => {
    console.log("App runngin on ", PORT );
});
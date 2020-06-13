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

app.listen(PORT, () => {
    console.log("App runngin on ", PORT );
});
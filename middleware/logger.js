/**
 * @file    logger.js
 * @desc    Express Middleware - logger
 */
const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    "[LOGGER]",
    `${req.protocol}://${req.get("host")}${req.originalUrl} ${moment().format(
      "LLLL"
    )}`
  );

  //Call next middlewarte function in the stack
  next();
};

module.exports = logger;

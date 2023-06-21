const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  BOOKING_SERVICE: process.env.BOOKING_SERVICE,
  FLIGHTSEARCH_SERVICE: process.env.FLIGHTSEARCH_SERVICE,
  REMINDER_SERVICE: process.env.REMINDER_SERVICE,
  AUTHENTICATION: process.env.AUTHENTICATION,
};

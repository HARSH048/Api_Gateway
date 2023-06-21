const express = require("express");
const ratelimit = require("express-rate-limit");
const axios = require("axios");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const {
  PORT,
  BOOKING_SERVICE,
  FLIGHTSEARCH_SERVICE,
  REMINDER_SERVICE,
  AUTHENTICATION,
} = require("./config/serverConfig");

const limit = ratelimit({
  windowMs: 2 * 60 * 1000,
  max: 6,
});
app.use(limit);

app.use("/bookingservice", async (req, res, next) => {
  try {
    console.log(req.headers["x-access-token"]);
    const response = await axios.get(AUTHENTICATION, {
      headers: { "x-access-token": req.headers["x-access-token"] },
    });
    if (response.data.success) {
      next();
    } else {
      res.status(401).json({
        message: "unauthorised",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorised",
    });
  }
});
app.use(
  "/bookingservice",
  createProxyMiddleware({
    target: BOOKING_SERVICE,
    changeOrigin: true,
  })
);

app.use(
  "/flightservice",
  createProxyMiddleware({
    target: FLIGHTSEARCH_SERVICE,
    changeOrigin: true,
  })
);

app.use(
  "/reminderservice",
  createProxyMiddleware({
    target: REMINDER_SERVICE,
    changeOrigin: true,
  })
);
const serverStart = async () => {
  app.listen(PORT, () => {
    console.log(`server is started on ${PORT}`);
  });
};
serverStart();

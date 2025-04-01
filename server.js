const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Example route to log data with timestamp
app.get("/track", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const timestamp = new Date().toISOString();

  // Log the request with timestamp to the console
  console.log(`[${timestamp}] Request received from IP: ${ip}`);

  res.json({ message: "Logged", ip, timestamp });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

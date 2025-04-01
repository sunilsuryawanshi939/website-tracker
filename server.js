const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/track", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const timestamp = new Date().toISOString();
  
  // Log data in a file
  const logData = `${timestamp} - IP: ${ip}\n`;
  fs.appendFile("logs.txt", logData, (err) => {
    if (err) console.error("Error logging data:", err);
  });

  res.json({ message: "Logged", ip, timestamp });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

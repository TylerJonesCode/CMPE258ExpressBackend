const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// A simple GET route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// A sample POST route
app.post("/echo", (req, res) => {
  res.json({ you_sent: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
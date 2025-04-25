// server.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/megharai-prog/climate-crisis");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/megharai-prog/st-huxley-college");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/megharai-prog/four-algorithms");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

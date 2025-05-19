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

app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/Megharai-Prog/climate-crisis-21");
});

app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/Megharai-Prog/st-huxley-college");
});

app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/Megharai-Prog/Sorting-algorithm");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

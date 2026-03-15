
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [{ username: "owner", password: "owner123", balance: 100000 }];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if(user) res.json({ success: true, balance: user.balance });
  else res.json({ success: false });
});

app.get("/matches", (req, res) => {
  res.json([
    { id: 1, teamA: "India", teamB: "Pakistan", oddsA: 1.80, oddsB: 2.10 },
    { id: 2, teamA: "Australia", teamB: "England", oddsA: 1.65, oddsB: 2.30 }
  ]);
});

app.post("/bet", (req, res) => {
  res.json({ success: true, message: "Bet placed (demo)" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

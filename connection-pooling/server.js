import express from "express";
import { query } from "./db.js";

const app = express();
app.use(express.json());

app.get("/users0", async (req, res) => {
  console.log("/users");
  try {
    let users;

    users = await query("SELECT SLEEP(0.6)");

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/users1", async (req, res) => {
  console.log("/users");
  try {
    let users;

    users = await query("SELECT SLEEP(0.6)");

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/users2", async (req, res) => {
  console.log("/users");
  try {
    let users;

    users = await query("SELECT SLEEP(0.6)");

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

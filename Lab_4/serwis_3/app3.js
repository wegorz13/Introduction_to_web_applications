require("dotenv").config();

const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const jwt = require("jsonwebtoken");

app.use(express.json());

function connect() {
  return new sqlite3.Database(
    "C:/Users/filip/projekty/wdai-ćw/lab4/library1.db",
    sqlite3.OPEN_READWRITE
  );
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403);
    req.user = user;
    next();
  });
}

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Musisz podać email i password!",
    });
  }

  const db = connect();

  const userExists = "SELECT * FROM user WHERE email = ?";
  db.get(userExists, [email], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (user) {
      return res
        .status(404)
        .json({ error: "Użytkownik o podanym mailu już istnieje." });
    }

    db.run(
      "INSERT INTO user (email, password) VALUES (?,?)",
      [email, password],
      function (err) {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }
        idx = String(this.lastID);
        res.status(201).json({
          message: "Konto założone poprawnie!",
          id: idx,
        });
      }
    );
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Musisz podać email i password!",
    });
  }

  const db = connect();

  const userExists = "SELECT user_id FROM user WHERE email = ? and password=?";
  db.get(userExists, [email, password], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else if (user) {
      const reqUser = req.body;
      const accessToken = jwt.sign(reqUser, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      return res.status(401).json({ error: "Błędne dane do logowania." });
    }
  });
});

const getUserByEmail = (email) => {
  const db = connect();

  return new Promise((resolve, reject) => {
    db.all("SELECT * from user WHERE email=?", [email], (err, row) => {
      resolve(row);
    });
  });
};

app.get("/user", authenticateToken, async (req, res) => {
  const { email } = req.user;
  const user = await getUserByEmail(email);

  res.status(200).json({
    message: "Pobrano użytkownika",
    user: user,
  });
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});

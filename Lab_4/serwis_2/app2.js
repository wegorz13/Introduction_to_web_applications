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

const getUserByEmailndPwd = (user) => {
  const db = connect();
  const { email, password } = user;
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT user_id from user WHERE email=? and password=?",
      [email, password],
      (err, row) => {
        if (err) {
          return res.status(500);
        }
        resolve(row);
      }
    );
  });
};

app.post("/orders", authenticateToken, async (req, res) => {
  const { user_id, book_id, quantity } = req.body;

  const result = await getUserByEmailndPwd(req.user);
  const user_id_auth = result.user_id;

  if (!user_id || !book_id || !quantity) {
    return res.status(400).json({
      message: "Musisz podać user_id, book_id i quantity!",
    });
  }

  if (user_id_auth != user_id) {
    return res.status(401).json({
      message: "niepoprawny token",
    });
  }

  const db = connect();

  const bookCheckSql = "SELECT * FROM books WHERE id = ?";
  db.get(bookCheckSql, [book_id], (err, book) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!book) {
      return res
        .status(404)
        .json({ error: "Książka o podanym ID nie istnieje." });
    }

    db.run(
      "INSERT INTO orders (user_id, book_id, quantity) VALUES (?, ?,?)",
      [user_id, book_id, quantity],
      function (err) {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }
        idx = String(this.lastID);
        res.status(201).json({
          message: "Zamówienie złożone poprawnie!",
          id: idx,
        });
      }
    );
  });
});

app.delete("/orders/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  const result = await getUserByEmailndPwd(req.user);
  const user_id_auth = result.user_id;
  db = connect();

  db.get(
    "SELECT user_id from ORDERS where order_id=?",
    [id],
    (err, user_id) => {
      if (!user_id || { user_id } != user_id_auth) {
        return res.status(401).json({
          message: "nie masz dostępu do tego zamówienia lub nie istnieje",
        });
      }
      db.run("DELETE FROM orders WHERE order_id=?", [id], (err) => {
        return res.status(201).json({
          message: "Zamówienie usunięte poprawnie!",
        });
      });
    }
  );
});

app.patch("/orders/:id", authenticateToken, (req, res) => {
  const { id } = req.params;
  const { book_id, quantity } = req.body;

  if (!book_id || !quantity) {
    return res.status(400).json({
      message: "Musisz podać book_id i quantity!",
    });
  }

  db = connect();

  db.get(
    "SELECT user_id from ORDERS where order_id=?",
    [id],
    (err, user_id) => {
      if (!user_id || { user_id } != user_id_auth) {
        return res.status(401).json({
          message: "nie masz dostępu do tego zamówienia lub nie istnieje",
        });
      }
      db.run(
        "UPDATE orders SET book_id=?, quantity=? WHERE order_id=?",
        [book_id, quantity, id],
        (err) => {
          if (err) {
            res.status(500).json({
              message: err.message,
            });
          }
          res.status(201).json({
            message: "Zamówienie zaktualizowane poprawnie!",
          });
        }
      );
    }
  );
});

app.get("/orders/:user_id", authenticateToken, async (req, res) => {
  const { user_id } = req.params;

  db = connect();

  const result = await getUserByEmailndPwd(req.user);
  const user_id_auth = result.user_id;

  if (user_id != user_id_auth) {
    return res.status(401).json({
      message: "nie masz dostępu do zamówień tego użytkownika",
    });
  }

  db.all("SELECT * from ORDERS where user_id=?", [user_id], (err, orders) => {
    res.status(201).json({
      orders: orders,
    });
  });
});

const PORT = 2020;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});

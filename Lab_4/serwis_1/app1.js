const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();

app.use(express.json());

function connect() {
  return new sqlite3.Database(
    "C:/Users/filip/projekty/wdai-ćw/lab4/library1.db"
  );
}

const getBookById = (id) => {
  const db = connect();

  return new Promise((resolve, reject) => {
    db.all("SELECT * from books WHERE id=?", [Number(id)], (err, row) => {
      resolve(row);
    });
  });
};

const getBooks = () => {
  const db = connect();

  return new Promise((resolve, reject) => {
    db.all("SELECT * from books", [], (err, rows) => {
      resolve(rows);
    });
  });
};

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await getBookById(id);

  res.status(200).json({
    message: "Pobrano książkę",
    book: book,
  });
});

app.get("/books", async (req, res) => {
  const books = await getBooks();

  res.status(200).json({
    message: "Pobrano książki",
    books: books,
  });
});

app.post("/books", (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({
      message: "Musisz podać title, author i year!",
    });
  }

  const db = connect();

  db.run(
    "INSERT INTO books (title, author,year) VALUES (?, ?,?)",
    [title, author, year],
    function (err) {
      if (err) {
        return res.status(500).json({
          message: "błąd systemu",
        });
      }
      idx = this.lastID;
      res.status(201).json({
        message: "Ksiązka dodana poprawnie!",
        id: idx,
      });
    }
  );
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;

  db = connect();
  db.run("DELETE FROM books WHERE id=?", [id], (err) => {
    res.status(201).json({
      message: "Ksiązka usunięta poprawnie!",
    });
  });
});

const PORT = 1010;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});


const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "new_task_app"
});
db.connect((err) => {
  if (err) {
    console.log("Database connection error: " + err);
  } else {
    console.log("Connected to the database");
  }
});
app.post('/signup', (req, res) => {
  const { username, password, email } = req.body;
  console.log("POST method is called ");
  const sql = 'INSERT INTO new_table (username, password,email) VALUES (?, ?, ?)';
  db.query(sql, [username, password, email], (err, result) => {
    if (err) {
      console.log("Database error: " + err);
      res.status(500).send("Error registering user");
    } else {
      res.status(200).send("User registered successfully");
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt for user: " + username);

  const sql = 'SELECT * FROM new_table WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log("Database error: " + err);
      res.status(500).json({ success: false, message: "Error during login" });
    } else {
      if (result.length > 0) {
        res.status(200).json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

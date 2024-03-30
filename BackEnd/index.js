const  express = require("express");
const app = express()
import { createConnection } from "mysql";
const cors =require("cors");

app.use(cors());
app.use(express.json());

const db = createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "nodejsdb",
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (id,name, email, password) VALUES (?,?,?,?)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Successful Registered!!!");
      }
    }
  );
});

app.listen(3271, () => {
  console.log(`Example app listening on port 3271`);
});

import { createConnection } from "mysql";

const connection = createConnection({
  host: "127.0.0.1",
  port: 3306,
  database: "udps",
  user: "root",
  password: "",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Conexión establecida");
});
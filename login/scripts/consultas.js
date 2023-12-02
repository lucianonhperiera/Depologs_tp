const mysql = require("mysql");

const connection = mysql.createConnection({
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

  // Consulta SQL

  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    // Mostrar resultados

    for (const row of results) {
      console.log(row);
    }
  });
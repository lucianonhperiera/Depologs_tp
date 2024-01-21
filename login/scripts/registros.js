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

  // Obtener los datos del formulario

  const nombre = document.querySelector("input[placeholder='Nombre']").value;
  const email = document.querySelector("input[placeholder='Email']").value;
  const contraseña = document.querySelector("input[placeholder='Contraseña']").value;

  // Insertar los datos en la base de datos

  const sql = `
    INSERT INTO usuarios (nombre, email, contraseña)
    VALUES ('${nombre}', '${email}', '${contraseña}');
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Datos insertados");
  });
});
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

  const email = document.querySelector("input[placeholder='Email']").value;
  const contraseña = document.querySelector("input[placeholder='Contraseña']").value;

  // Consulta SQL para buscar el usuario en la base de datos

  const sql = `
    SELECT * FROM usuarios
    WHERE email = '${email}'
    AND contraseña = '${contraseña}';
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    // Si se encuentra el usuario, iniciar sesión

    if (results.length > 0) {
      // Redireccionar a la página de inicio
      window.location.href = "./home/home.html";
    } else {
      // Mostrar un mensaje de error
      alert("El usuario o la contraseña no son válidos");
    }
  });
});
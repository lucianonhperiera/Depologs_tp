<?php

// Create a connection to the MySQL database
$conn = mysqli_connect("localhost", "root", "", "udps");

// Check if the connection was successful
if (!$conn) {
  die("Error connecting to database: " . mysqli_connect_error());
}

// Retrieve the submitted form data from the $_POST superglobal
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

// Prepare an SQL INSERT statement to insert the user data into the 'users' table
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

// Execute the SQL INSERT statement and check the result for success
$result = mysqli_query($conn, $sql);

// If the registration is successful, display a message informing the user of successful registration
if ($result) {
  echo "¡Registro exitoso!";
} else {
  echo "Error al registrar: " . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);

?>

<?php

// Create a connection to the MySQL database
$conn = mysqli_connect("localhost", "root", "", "depologs");

// Check if the connection was successful
if (!$conn) {
  die("Error connecting to database: " . mysqli_connect_error());
}

// Retrieve the submitted form data from the $_POST superglobal
$email = $_POST["email"];
$password = $_POST["password"];

// Prepare an SQL SELECT statement to fetch the user record based on the entered email address
$sql = "SELECT * FROM users WHERE email='$email'";

// Execute the SQL SELECT statement and check the result for a single row
$result = mysqli_query($conn, $sql);

// If a matching row is found, verify the entered password against the stored password
if (mysqli_num_rows($result) == 1) {
  // Get the user record from the database
  $row = mysqli_fetch_assoc($result);

  // Compare the entered password against the stored password
  if (password_verify($password, $row["password"])) {
    // Set a session variable to indicate the user is logged in
    session_start();
    $_SESSION["logged_in"] = true;

    // Redirect the user to the logged-in area of the website
    header("Location: logged-in.php");
  } else {
    echo "Contraseña incorrecta.";
  }
} else {
  echo "El correo electrónico no existe.";
}

// Close the database connection
mysqli_close($conn);

?>
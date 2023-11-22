const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contraseña');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === 'admin@depologs' && password === 'admin') {
    // Redirect to the home page, assuming it's in the parent folder
    window.location.href = '../home/home.html';
  } else {
    alert('Incorrect credentials. Please try again.');
  }
});
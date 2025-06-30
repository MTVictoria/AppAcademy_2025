document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (username === 'admin' && password === '1234') {
    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Login successful!';
  } else {
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'Invalid username or password!';
  }
});
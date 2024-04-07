// login.js
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const username = formData.get('username');
    const password = formData.get('password');
  
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message || 'Failed to log in');
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token);
      alert('Logged in successfully');
      location.href = '/profile.html'; // Redirect to dashboard or any other page
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  });
  
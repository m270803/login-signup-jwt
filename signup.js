// signup.js
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const username = formData.get('username');
    const password = formData.get('password');
  
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message || 'Failed to sign up');
      }
  
      alert('Signed up successfully');
      location.href = '/login.html';
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  });
  
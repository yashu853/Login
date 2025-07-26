document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        email,
        password
      });

      // ✅ Only show success if response is ok
      if (response.status === 200) {
        alert(response.data.message || "User logged in successfully!");
        // window.location.href = "dashboard.html"; // optional redirect
      } else {
        alert("Login failed. Please try again.");
      }

    } catch (error) {
      // ❌ Only handle real errors here
      if (error.response) {
        // Server responded with 4xx or 5xx
        alert(error.response.data.message || "Invalid login credentials.");
      } else if (error.request) {
        // No response received (CORS or server down)
        alert("No response from server. Make sure your backend is running.");
      } else {
        // Other unknown errors
        alert("Something went wrong. Try again later.");
      }
    }
  });
});

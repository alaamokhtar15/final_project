
  
  function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem(`user_${username}`));
  
    if (storedUser && storedUser.password === password) {
      localStorage.setItem("loggedInUser", username);
      alert("Login successful!");
    } else {
      alert("Invalid credentials.");
    }
  }
  
  // function logoutUser() {
  //   localStorage.removeItem("loggedInUser");
  //   alert("Logged out.");
  // }
  
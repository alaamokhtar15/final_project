 function registerUser() {
     const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const username = document.getElementById('reg-username').value;
     const password = document.getElementById('reg-password').value;
  
    const user = { name, email, username, password };
    localStorage.setItem(`user_${username}`, JSON.stringify(user));
     alert("User registered successfully!");
   }
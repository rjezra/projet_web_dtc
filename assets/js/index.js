document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById("mail");
    const password = document.getElementById("password");
    const submitButton = document.getElementById("submit");
    const loginForm = document.getElementById("loginForm");
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    function validatePassword(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      return passwordPattern.test(password);
    }
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const emailValue = email.value;
      const passwordValue = password.value;
  
      if (!validateEmail(emailValue)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }
  
      if (!validatePassword(passwordValue)) {
        alert("Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre.");
        return;
      }
  
      window.location.href = "./pages/accueil.html";
    });
  });
  
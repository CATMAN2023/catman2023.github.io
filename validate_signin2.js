        const emailInput = document.getElementById("inputEmail");
        const emailValue = emailInput.value;

        console.log(emailValue); // 

        const passwordInput = document.getElementById("inputPassword");
        const loginButton = document.getElementById("loginButton");

        emailInput.addEventListener("input", () => {
            if (validateEmail(emailInput.value)) {
                emailInput.classList.remove("invalid");
                emailInput.classList.add("valid");
                checkFormValidity();
            } else {
                emailInput.classList.remove("valid");
                emailInput.classList.add("invalid");
            }
        });

        passwordInput.addEventListener("input", () => {
            if (validatePassword(passwordInput.value)) {
                passwordInput.classList.remove("invalid");
                passwordInput.classList.add("valid");
                checkFormValidity();
            } else {
                passwordInput.classList.remove("valid");
                passwordInput.classList.add("invalid");
            }
        });

        function validateEmail(inputEmail) {
            // validar email formatos.
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return regex.test(inputEmail);
        }

        function validatePassword(inputPassword) {
            // validar contraseña minima longitud 8 caracteres.
            return inputPassword.length >= 8;
        }

        function checkFormValidity() {
            if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
                loginButton.disabled = false;

            } else {
                loginButton.disabled = true;
            }
        // Función para habilitar el botón de inicio de sesion
        function enableLoginButton() {
        if (validateEmail(inputEmail.value) && inputPassword.value.length >= 8) {
        loginButton.removeAttribute("disabled");
        //window.location.href='C:/Users/CARLO/Downloads/FOOTBALL/LIGA.html';
        
        } else {
        loginButton.setAttribute("disabled", "");
        //window.location.href='C:/Users/CARLO/Downloads/FOOTBALL/LIGA.html';
             }
        }
        
        // Agregar evento al formulario de inicio de sesion
        
        const item = document.querySelector("loginButton");
        loginButton.addEventListener("click", () => {
        event.preventDefault();
        // Redireccionar a la página web
        window.location.href="LIGA.html";
        //window.location.href="C:/Users/CARLO/Downloads/FOOTBALL/LIGA.html";
  });
        }
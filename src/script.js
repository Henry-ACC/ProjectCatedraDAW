document.addEventListener("DOMContentLoaded", function () {
    // Validación del formulario de registro
    const formRegistro = document.getElementById("registro-form");
    formRegistro.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombreApellido = formRegistro.querySelector('input[placeholder="Nombre y Apellido"]');
      const email = formRegistro.querySelector('input[placeholder="Email"]');
      const dui = formRegistro.querySelector('input[placeholder="DUI"]');
      const contrasena = formRegistro.querySelector('input[placeholder="Contraseña"]');
      
      // Realiza la validación del formulario de registro aquí
      const errorMessage = validateRegistro(nombreApellido, email, dui, contrasena);
  
      if (errorMessage) {
        alert(errorMessage);
      } else {
        // Si la validación es exitosa, puedes mostrar un mensaje de éxito y resetear el formulario
        document.getElementById("mensaje-exito").style.display = "block";
        formRegistro.reset();
      }
    });
  
    // Validación del formulario de inicio de sesión
    const formInicioSesion = document.getElementById("inicio-sesion-form");
    formInicioSesion.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = formInicioSesion.querySelector('input[id="email"]');
const contrasena = formInicioSesion.querySelector('input[id="contrasena"]');

      
      console.log('Email:', email.value);
      console.log('Contraseña:', contrasena.value);

if (email.value === "usuario@gmail.com" && contrasena.value === "password") {
  window.location.href = "./TablaVentas.js"; // Redirigir a la otra página
} else {
  alert("Las credenciales son incorrectas. Por favor, inténtalo de nuevo.");
}

      
    });
  
    function validateRegistro(nombreApellido, email, dui, contrasena) {
      if (!nombreApellido || !email || !dui || !contrasena) {
        return "Todos los campos son requeridos.";
      }
  
      if (nombreApellido.value.trim() === "") {
        return "Por favor, ingresa tu nombre y apellido.";
      }
  
      if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(email.value)) {
        return "Por favor, ingresa un correo electrónico válido de Gmail.";
      }
  
      if (!/^\d{8}-\d$/.test(dui.value)) {
        return "Por favor, ingresa un DUI válido en el formato correcto (########-#).";
      }
  
      if (contrasena.value.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
      }
  
      return null; // No hay errores
    }
  });
  
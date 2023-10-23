import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TablaVentas from './TablaVentas';
import './App.css';

function App() {
  const [mostrarRegistro, setMostrarRegistro] = useState(true);
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [nombreApellido, setNombreApellido] = useState('');
  const [dui, setDui] = useState('');
  
  const [mostrarMensajeExito, setMostrarMensajeExito] = useState('');
  const [mostrarError, setMostrarError] = useState('');

  const alternarFormulario = () => {
    setMostrarRegistro(!mostrarRegistro);
    setMostrarError(''); // 
  };

  const handleSubmitRegistro = (e) => {
    e.preventDefault();

    if (!nombreApellido || !email || !dui || !contrasena) {
      setMostrarError('Todos los campos son requeridos.');
    } else if (nombreApellido.trim() === "") {
      setMostrarError('Por favor, ingresa tu nombre y apellido.');
    } else if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(email)) {
      setMostrarError('Por favor, ingresa un correo electrónico válido de Gmail.');
    } else if (!/^\d{8}-\d$/.test(dui)) {
      setMostrarError('Por favor, ingresa un DUI válido en el formato correcto (########-#).');
    } else if (contrasena.length < 8) {
      setMostrarError('La contraseña debe tener al menos 8 caracteres.');
    } else {
      setMostrarError('');
      setNombreApellido('');
      setEmail('');
      setDui('');
      setContrasena('');
      setMostrarMensajeExito('Registro exitoso. ¡Bienvenido!');

      setTimeout(() => {
        setMostrarMensajeExito('');
      }, 3000);
    }
  };

  const handleSubmitInicioSesion = (e) => {
    e.preventDefault();
    if (email === "usuario@gmail.com" && contrasena === "password") {
      window.location.href = "/TablaVentas";
    } else {
      setMostrarError("Las credenciales son incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/TablaVentas" element={<TablaVentas />} />
        <Route
          path="/*"
          element={
            <div className="contenedor-formulario">
              <div className={`mensaje ${mostrarRegistro ? 'mensaje-izquierda' : 'mensaje-derecha'}`}>
                <img src="./ima.jpeg" style={{ width: '60%' }} alt="Imagen" />
                <h2>Bienvenido a Mi API</h2>
                <p>
                  {mostrarRegistro
                    ? 'Si ya tienes una cuenta por favor inicia sesión aquí'
                    : 'Si aún no tienes una cuenta, regístrate aquí'}
                </p>
                <button className={mostrarRegistro ? 'boton-registro' : 'boton-inicio-sesion'} onClick={alternarFormulario}>
                  {mostrarRegistro ? 'Iniciar Sesión' : 'Registrarse'}
                </button>
              </div>
              {mostrarRegistro ? (
                <form className={`formulario ${mostrarRegistro ? 'formulario-derecha' : 'formulario-izquierda'}`} id="registro-form" onSubmit={handleSubmitRegistro}>
                  <h2 className="crear-cuenta">Crear una cuenta</h2>
                  <div className="iconos">
                    <div className="borde-icono">
                      <i className="bx bxl-instagram"></i>
                    </div>
                    <div className="borde-icono">
                      <i className="bx bxl-linkedin"></i>
                    </div>
                    <div className="borde-icono">
                      <i className="bx bxl-facebook-circle"></i>
                    </div>
                  </div>
                  <br />
                  <br />
                  <p>Crear una cuenta gratis</p>
                  <input type="text" placeholder="Nombre y Apellido" value={nombreApellido} onChange={(e) => setNombreApellido(e.target.value)} />
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="text" placeholder="DUI" value={dui} onChange={(e) => setDui(e.target.value)} />
                  <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                  <input type="submit" value="Registrarse" />
                </form>
              ) : (
                <form className={`formulario ${mostrarRegistro ? 'formulario-derecha' : 'formulario-izquierda'}`} id="inicio-sesion-form" onSubmit={handleSubmitInicioSesion}>
                  <h2 className="iniciar-sesion">Iniciar Sesión</h2>
                  <div className="iconos">
                    <div className="borde-icono">
                      <i className="bx bxl-instagram"></i>
                    </div>
                    <div className="borde-icono">
                      <i className="bx bxl-linkedin"></i>
                    </div>
                    <div className="borde-icono">
                      <i className="bx bxl-facebook-circle"></i>
                    </div>
                  </div>
                  <br />
                  <br />
                  <p>¿Aun no tienes cuenta?</p>
                  <input type="email" id="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" id="contrasena" placeholder="contraseña" required value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                  <input type="submit" value="Iniciar Sesión" />
                </form>
              )}
              {mostrarMensajeExito && (
              <div className="mensaje-exito" id="mensaje-exito">
                <br />
                <h3>{mostrarMensajeExito}</h3>
                <br />
                <button id="boton-aceptar" className="mensaje" onClick={() => setMostrarMensajeExito('')}> Aceptar</button>
              </div>
              )}
              {mostrarError && (
              <div className="mensaje-error" id="mensaje-error">
                <br />
                <p>{mostrarError}</p>
                <br />
                <button id="boton-aceptar-error" className="mensaje" onClick={() => setMostrarError('')}> Aceptar </button>
              </div>
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import './tabla.css';

function TablaVentas() {
  const [showForm, setShowForm] = useState(false);
  

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      {showForm ? (
        <div className="form-container" id="formularioContainer">
          <h1>Agregar Producto</h1>
          <form onSubmit={handleSubmit} id="formulario">
            <label htmlFor="idProducto">ID Producto:</label>
            <input type="text" id="idProducto" name="idProducto" required />
            <br />
            <br />

            <label htmlFor="nombreProducto">Nombre del Producto:</label>
            <input type="text" id="nombreProducto" name="nombreProducto" required />
            <br />
            <br />

            <label htmlFor="precioUnitario">Precio Unitario:</label>
            <input type="text" id="precioUnitario" name="precioUnitario" required />
            <br />
            <br />

            <label htmlFor="cantidadVendida">Cantidad Vendida:</label>
            <input type="text" id="cantidadVendida" name="cantidadVendida" required />
            <br />
            <br />

            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion"></textarea>
            <br />
            <br />

            <label htmlFor="categoria">Categoría:</label>
            <input type="text" id="categoria" name="categoria" />
            <br />
            <br />

            <button type="submit">Agregar Producto</button>
          </form>
          <button type="submit" onClick={toggleForm} className="btn-cancel">
            Cancelar
          </button>
        </div>
      ) : (
        <div>
          <h1>Tabla de Ventas</h1>
          <table>
            <thead>
              <tr>
                <th>ID Producto</th>
                <th>Nombre del Producto</th>
                <th>Precio Unitario</th>
                <th>Cantidad Vendida</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          <button onClick={toggleForm} className="btn-add">
            Agregar
          </button>
        </div>
      )}
    </div>
  );
}

export default TablaVentas;

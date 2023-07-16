import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  // Obtener los datos del usuario del localStorage
  const storedData = localStorage.getItem("user");
  const user = storedData ? JSON.parse(storedData).user : null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container px-4">
        <Link className="navbar-brand" to="/">Universidad</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {user && user.rol === "estudiante" && (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hola, {user.apellido_y_nombre}</span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/estudianteDashboard">Estudiante Dashboard</Link>
                </li>
              </>
            )}
            {user && user.rol === "admin" && (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hola, Administrador</span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AdminDashboard">Administrador Dashboard</Link>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Iniciar sesión</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registrarse">Registrarse</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
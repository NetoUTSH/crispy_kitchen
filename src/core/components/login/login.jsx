import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        Swal.fire({
          title: "Las credenciales son invalidas",
          icon: "info",
          confirmButtonText: "Aceptar",
        });
        
      }else{
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("jwtToken", token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "Hubo un error al iniciar sesion",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="card p-4 shadow-lg bg-transparent border border-light rounded-4 backdrop-blur" style={{ minWidth: "320px", maxWidth: "420px" }}>
        <h2 className="text-center text-white mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-transparent text-white border-warning"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoFocus
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email" className="text-warning">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control bg-transparent text-white border-warning"
              id="password"
              name="password"
              placeholder="Contraseña"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="password" className="text-warning">Contraseña</label>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3 text-white small">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Recuérdame
              </label>
            </div>
            <Link to={"/recover"} className="text-white text-decoration-none">
              ¿Perdiste tu contraseña?
            </Link>
          </div>

          <button type="submit" className="btn btn-warning w-100 mb-3">
            Login
          </button>

          <div className="text-center text-white">
            <p className="mb-0">
              ¿No tienes cuenta?{" "}
              <Link to={"/register"} className="text-white fw-bold text-decoration-none">
                Regístrate
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

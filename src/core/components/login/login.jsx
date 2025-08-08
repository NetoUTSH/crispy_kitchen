import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
        backgroundSize: "",
        backgroundPosition: "center",
      }}
    >
      <div className="card p-4 shadow-lg bg-transparent border border-light rounded-4 backdrop-blur">
        <h2 className="text-center text-white mb-4">Login</h2>
        <form action="https://formspree.io/f/xzblbbgd" method="POST">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-transparent text-white border-warning"
              id="email"
              name="Email"
              placeholder="Email"
              required
              autoFocus
              autoComplete="off"
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
            <a href="#" className="text-white text-decoration-none">
              ¿Perdiste tu contraseña?
            </a>
          </div>

          <button type="submit" className="btn btn-warning w-100 mb-3">
            Login
          </button>

          <div className="text-center text-white">
            <p className="mb-0">
              ¿No tienes cuenta?{" "}
              <a href="register.html" className="text-white fw-bold text-decoration-none">
                Regístrate
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
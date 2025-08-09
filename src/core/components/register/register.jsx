import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterForm = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/bg-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="p-4 shadow-lg w-100"
        style={{
          maxWidth: "440px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          color: "white",
        }}
      >
        <h2 className="text-center mb-4">Registro</h2>
        <form action="https://formspree.io/f/xzblbbgd" method="POST">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control border-warning bg-transparent text-white"
              id="username"
              name="Username"
              placeholder="Usuario"
              required
              autoFocus
              autoComplete="off"
            />
            <label htmlFor="username" style={{ color: "#e67e22" }}>
              Usuario
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control border-warning bg-transparent text-white"
              id="email"
              name="Email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <label htmlFor="email" style={{ color: "#e67e22" }}>
              Email
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control border-warning bg-transparent text-white"
              id="password"
              name="password"
              placeholder="Contraseña"
              required
            />
            <label htmlFor="password" style={{ color: "#e67e22" }}>
              Contraseña
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label className="form-check-label" htmlFor="terms" style={{ color: "white" }}>
              Acepto los términos y condiciones
            </label>
          </div>

          <button
            type="submit"
            className="btn w-100 mb-3"
            style={{
              backgroundColor: "#e67e22",
              border: "none",
              color: "#000",
              fontWeight: "500",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.border = "2px solid #e67e22";
              e.target.style.color = "#e67e22";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#e67e22";
              e.target.style.border = "none";
              e.target.style.color = "#000";
            }}
          >
            Registrar
          </button>

          <div className="text-center">
            <p className="mb-0" style={{ color: "white" }}>
              ¿Ya tienes cuenta?{" "}
              <a href="login.html" className="fw-bold text-white text-decoration-none">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
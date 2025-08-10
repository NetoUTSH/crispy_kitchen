import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RecoverEmail = () => {
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
      <div className="card p-4 shadow-lg bg-transparent border border-light rounded-4 backdrop-blur">
        <h2 className="text-center text-white mb-4">Recuperar contraseña</h2>
        <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-transparent text-white border-warning"
              id="recoverEmail"
              placeholder="Ingresa tu email"
              required
            />
            <label htmlFor="recoverEmail" className="text-warning">Email</label>
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Enviar código
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoverEmail;

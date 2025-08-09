import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ResetPassword = () => {
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
        <h2 className="text-center text-white mb-4">Restablecer contraseña</h2>
        <form>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control bg-transparent text-white border-warning"
              id="newPassword"
              placeholder="Nueva contraseña"
              required
            />
            <label htmlFor="newPassword" className="text-warning">Nueva contraseña</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control bg-transparent text-white border-warning"
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              required
            />
            <label htmlFor="confirmPassword" className="text-warning">Confirmar contraseña</label>
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Guardar nueva contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

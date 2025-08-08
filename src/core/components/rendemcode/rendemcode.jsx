import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VerifyCode = () => {
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
        <h2 className="text-center text-white mb-4">Verifica tu código</h2>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control bg-transparent text-white border-warning"
              id="verifyCode"
              placeholder="Código de verificación"
              required
            />
            <label htmlFor="verifyCode" className="text-warning">Código</label>
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;

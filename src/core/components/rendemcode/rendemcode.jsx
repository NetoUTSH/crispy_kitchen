import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("recoverEmail");
    if (!email) {
      Swal.fire({
              title: "Hubo un error, comienza con el proceso de nuevo",
              icon: "info",
            });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
        Swal.fire({
                title: "El codigo es invalido o ha expirado",
                icon: "info",
                confirmButtonText: "Aceptar",
              });
      }else{
        navigate("/reset");
      }
      
    } catch (error) {
      Swal.fire({
              title: "Hubo un error al enviar el codigo",
              icon: "error",
              confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/bg-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="card p-4 shadow-lg bg-transparent border border-light rounded-4 backdrop-blur" style={{ minWidth: "320px", maxWidth: "420px" }}>
        <h2 className="text-center text-white mb-4">Verifica tu código</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control bg-transparent text-white border-warning"
              id="verifyCode"
              placeholder="Código de verificación"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              autoComplete="off"
              autoFocus
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const RecoverEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        Swal.fire({
                title: "No se encontro un usuario con este email",
                icon: "error",
              });
      }else{
        localStorage.setItem("recoverEmail", email); // <-- guardamos el email
        navigate("/verify");
      }
    } catch (error) {
      Swal.fire({
              title: "Hubo un error",
              icon: "error",
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
        <h2 className="text-center text-white mb-4">Recuperar contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-transparent text-white border-warning"
              id="recoverEmail"
              placeholder="Ingresa tu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              autoComplete="off"
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

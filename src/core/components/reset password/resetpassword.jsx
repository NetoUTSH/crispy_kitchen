import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {

      Swal.fire({
            title: "Las contraseñas no son iguales",
            icon: "info",
      });

      return;
    }

    const email = localStorage.getItem("recoverEmail");
    if (!email) {
      Swal.fire({
              title: "Hubo un error, comienza el proceso de nuevo",
              icon: "error",
            });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (!response.ok) {
        Swal.fire({
                title: "Hubo un error al restablecer la contrasena",
                icon: "error",
          });
   
      }

      Swal.fire({
              title: "Contraseña restablecida con èxito",
              icon: "success",
              confirmButtonText: "Aceptar",
      });

      // Limpias los inputs si quieres:
      setNewPassword("");
      setConfirmPassword("");

      // Opcional: redirigir a login o a otra página
      navigate("/login")
    } catch (error) {
      Swal.fire({
              title: "Hubo un error al restablecer la contrasena",
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
        <h2 className="text-center text-white mb-4">Restablecer contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control bg-transparent text-white border-warning"
              id="newPassword"
              placeholder="Nueva contraseña"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
              autoFocus
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
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

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("https://emailsendback-production.up.railway.app/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        Swal.fire({
                title: "Hubo un error en el registro",
                icon: "error",
        });
      }else{
        
        const data = await response.json();

        const jwtToken = data.token;
  
        localStorage.setItem("JwtToken",jwtToken)
  
        setFormData({ name: "", email: "", password: "" });
  
        navigate("/");
      }

      

    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "Hubo un error al hacer el registro",
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
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control border-warning bg-transparent text-white"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Usuario"
              required
              autoFocus
              autoComplete="off"
            />
            <label htmlFor="name" style={{ color: "#e67e22" }}>
              Usuario
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control border-warning bg-transparent text-white"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
              <Link to={"/login"} className="fw-bold text-white text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ErrorPage = () => {
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
      <div className="card p-4 shadow-lg bg-transparent border border-danger rounded-4 backdrop-blur">
        <h2 className="text-center text-danger mb-4">¡Error!</h2>
        <p className="text-center text-white">
          Ocurrió un problema al procesar tu solicitud. Por favor, intenta nuevamente.
        </p>
        <div className="d-flex justify-content-center">
          <a href="/" className="btn btn-warning mt-3">Volver al inicio</a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

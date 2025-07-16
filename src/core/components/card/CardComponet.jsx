import React from "react";
import menuData from "../card/menuData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Special Menus</h2>
      <div className="row justify-content-center">
        {menuData.map((platillo, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-lg border-0 h-100">
              <div className="position-relative">
                <img
                  src={platillo.imagen}
                  alt={platillo.nombre}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2">
                  Especial
                </span>
              </div>

              <div className="card-body">
                {/* Nombre y precio alineados */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title fw-semibold mb-0">
                    {platillo.nombre}
                  </h5>
                  <div>
                    <span className="text-warning fw-bold me-2">
                      ${platillo.precio}
                    </span>
                    <small className="text-muted text-decoration-line-through">
                      ${Math.round(platillo.precio * 1.3)}
                    </small>
                  </div>
                </div>

                {/* Descripción */}
                <p className="card-text text-muted" style={{ fontSize: "0.95rem" }}>
                  {platillo.descripcion}
                </p>

                {/* Estrellas y opiniones */}
                <div className="d-flex align-items-center mt-3">
                  <span className="me-2 fw-semibold">{platillo.estrellas}</span>/5
                  <span className="text-warning me-2 ms-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`bi-star-fill ${
                          i < platillo.estrellas ? "text-warning" : "text-secondary"
                        }`}
                      ></i>
                    ))}
                  </span>
                  <small className="text-muted">20 opiniones</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

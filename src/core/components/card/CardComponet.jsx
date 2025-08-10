// CardComponent.jsx
import menuData from "./menuData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CardComponent.css";
import { useCart } from "../../../context/CartContext";

export const Card = () => {
  const { addToCart } = useCart();
  return (
    <div className="conten " id="menus">
      <div className="container pt-5 bg-light">
        <h1 className="h1">Menús Especiales</h1>
        <div className="row justify-content-center">
          {menuData.map((platillo, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-lg border-0 h-100">
                <div className="position-relative">
                  <img
                    src={platillo.imagen}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2">
                    Especial
                  </span>
                </div>

                <div className="card-body">
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

                  <div className="d-flex align-items-center mt-3">
                    <span className="me-2 fw-semibold">
                      {platillo.estrellas}
                    </span>
                    /5
                    <span className="text-warning me-2 ms-2">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi-star-fill ${
                            i < platillo.estrellas
                              ? "text-warning"
                              : "text-secondary"
                          }`}
                        ></i>
                      ))}
                    </span>
                    <small className="text-muted">20 opiniones</small>
                  </div>
                </div>

                <button
                  className="btn btn-warning"
                  onClick={() => addToCart(platillo)}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

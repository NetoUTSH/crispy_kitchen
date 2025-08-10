import "./navbar.css"
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top w-100 shadow-sm">
        <div className="container px-4">
          <h1 className="navbar-title mb-0">Crispy Kitchen</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link custom-link" href="#">Página principal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#menus">Menús especiales</a>
              </li>
              <li className="nav-item"><a className="nav-link custom-link" href="#news&events">Noticias y Eventos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#faq">Preguntas Frecuentes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#footer">Visítanos</a>
              </li>

            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/form" className="nav-link">
                  <button type="button" className="btn reservation-btn btn-danger btn-lg">
                    Reservacion
                  </button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/form" className="nav-link">
                  <button type="button" className="btn btn-bg btn-lg">
                    <i class="bi bi-cart-plus icono-color"></i>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/form" className="nav-link">
                  <button type="button" className="btn btn-bg btn-lg">
                    <i class="bi bi-person-circle icono-color"></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};


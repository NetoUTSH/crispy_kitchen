import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Swal from "sweetalert2";

export const Navbar = () => {
  const { totalItems, points } = useCart();
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); 
    setIsLogged(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLogged(false);
    navigate("/");
    Swal.fire({
      title: "Has salido de tu cuenta",
      icon: "success",
    });
  };


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
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link custom-link" to={"/"}>
                  Página principal
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#menus">
                  Menús Especiales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#news&events">
                  Noticias y Eventos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#faq">
                  Preguntas Frecuentes
                </a>
              </li>
              <li className="nav-item align-self-center">
                <a className="nav-link custom-link" href="#footer">
                  Visítanos
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/form" className="nav-link">
                  <button
                    type="button"
                    className="btn reservation-btn btn-danger btn-lg"
                  >
                    Reservacion
                  </button>
                </Link>
              </li>

              <li className="nav-item position-relative">
                <Link to="/cart" className="nav-link">
                  <button
                    type="button"
                    className="btn btn-bg btn-lg position-relative"
                  >
                    <i className="bi bi-cart-plus icono-color"></i>
                    {totalItems > 0 && (
                      <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                        {totalItems}
                      </span>
                    )}
                  </button>
                </Link>
              </li>
              <li className="nav-item align-self-center">
                <span className="badge  text-dark p-2 fs-6">
                  ⭐ {points} pts
                </span>
              </li>

              <li className="nav-item">
                {isLogged ? (
                  <div className="nav-link">
                    <button
                    onClick={handleLogout}
                    className="btn btn-bg btn-lg">
                    <i className="bi bi-box-arrow-right icono-color"></i>
                  </button>
                  </div>
                  
                ) : (
                  <Link to="/login" className="nav-link">
                    <button type="button" className="btn btn-bg btn-lg">
                      <i className="bi bi-person-circle icono-color"></i>
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

import "./navbar.css"
import { Link } from "react-router-dom";


export const Navbar = () => {

  


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1>           
             Crispy Kitchen
          </h1>
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


          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" className="navbar-list">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" className="nabvar-link">
                  Pagina principal
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" className="nabvar-link">
                  Historia
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" className="nabvar-link">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a aria-current="page" href="#" className="nabvar-link">
                  Nuestras actualizaciones
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" className="nabvar-link">
                  Contactos
                </a>
              </li>
               <li className="nav-item">
               <Link to='/form' className="navbar-link-no">
               <button redi type="button" className="navbar-boton btn btn-danger">Reservacion</button>
               </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};


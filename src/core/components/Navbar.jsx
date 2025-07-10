import "./navbar.css"

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h5 className="navbar-list">           
             Krispy Kitchens
          </h5>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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
                <a class="nav-link active" aria-current="page" href="#" className="nabvar-link">
                  Nuestras actualizaciones
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" className="nabvar-link">
                  Contactos
                </a>
              </li>
               <li class="nav-item">
                <button type="button" class="btn-danger" className="navbar-boton">Reservacion</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};


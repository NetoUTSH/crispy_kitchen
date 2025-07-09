import "./navbar.css"

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h5>           
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
            <ul class="navbar-nav">
              <li class="nav-item">
                <a className="nabvar-link"  class="nav-link active" aria-current="page" href="#">
                  Pagina principal
                </a>
              </li>
              <li class="nav-item">
                <a className="nabvar-link" class="nav-link active" aria-current="page" href="#">
                  Historia
                </a>
              </li>
              <li class="nav-item">
                <a className="nabvar-link" class="nav-link active" aria-current="page" href="#">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a className="nabvar-link" class="nav-link active" aria-current="page" href="#">
                  Nuestras actualizaciones
                </a>
              </li>
              <li class="nav-item">
                <a className="nabvar-link" class="nav-link active" aria-current="page" href="#">
                  Contactos
                </a>
              </li>
               <li class="nav-item">
                <button className="navbar-boton" type="button" class="btn-danger">Reservacion</button>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </>
  );
};


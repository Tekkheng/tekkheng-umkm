const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg align-item-center d-flex flex-column pb-5 bg bg-warning"
    >
      <div className="container navbar-dark">
        <a className="navbar-brand pe-5" href="#">
          DongKal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar_satu"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                | Help |
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Support
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://github.com/Tekkheng?tab=repositories"
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://www.linkedin.com/in/tek-kheng-58211723b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://www.instagram.com/akheng_je/?hl=en"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://www.youtube.com/channel/UC6567sl_0-a2_fhGPloih5w"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container bg bg-light p-3 mt-5 navbar_dua">
        <div
          className="collapse navbar-collapse d-flex justify-content-around"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product">
                Product
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <h1 className="first">Dong</h1>
            <h1 className="last">Kal</h1>
          </span>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item hover2">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item hover2">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

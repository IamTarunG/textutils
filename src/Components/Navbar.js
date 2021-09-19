import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <Button
              variant="primary"
              onClick={props.handleMode}
              className="mx-3"
            >
              {props.mode === "light" ? "Dark" : "Light"}
            </Button>

            <div
              className="rounded "
              style={{
                backgroundColor: "#e27d60",
                width: "35px",
                height: "35px",
                cursor: "pointer",
              }}
              onClick={props.rMode}
            ></div>
            <div
              className="rounded mx-3"
              style={{
                backgroundColor: "#242582",
                width: "35px",
                height: "35px",
                cursor: "pointer",
              }}
              onClick={props.pMode}
            ></div>
            <div
              className="rounded"
              style={{
                backgroundColor: "#f64c72",
                width: "35px",
                height: "35px",
                cursor: "pointer",
              }}
              onClick={props.reMode}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title",
  aboutText: "About",
};

import React from "react";
import { Link } from "react-router-dom";
import './nav.css'

function Navbarn({cat}) {
  return (
    <div>
      {/* for sticky nav bar use fixed-top */}
      <nav
        className={`navbar fixed-top navbar-expand-lg bg-dark `}
        style={{ marginTop: "80px" , paddingLeft:"40px"}}
      >
        <div className="container-fluid">
          <div className={`navbar-brand active text-light`}>
            News-Updates
          </div>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mt-1 mb-lg-0">
              <li className="nav-item" >
                <Link
                  className={`nav-link active text-light`}
                  aria-current="page"
                  to="/news"
                >
                  <span>General</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link active text-light`} to="/business">
                  <span>Business</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-light`}
                  to="/entertainment"
                >
                  <span>Entertainment</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-light`} to="/health">
                  <span>Health</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-light`} to="/science">
                  <span>Science</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-light`} to="/sports">
                  <span>Sports</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-light`} to="/technology">
                  <span>Technology</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbarn;



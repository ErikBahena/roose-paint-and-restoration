import React from "react";
import logo from "../img/logo.jpg";
import { Link } from "gatsby";

export default function Header() {
  return (
    <div
      id="header-sticky"
      className="header__bottom pl-55 pr-55 header__padding"
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="logo" style={{ height: "100px" }} />
              </a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-7 d-none d-lg-block">
            <div className="header__bottom-mid d-flex align-items-center">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link to="/" activeClassName="active">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" activeClassName="active">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" activeClassName="active">
                        Services <i className="far fa-angle-down" />
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/services" activeClassName="active">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/details" activeClassName="active">
                            Services Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">
                        Pages <i className="far fa-angle-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="portfolio.html">portfolio</a>
                        </li>
                        <li>
                          <a href="portfolio-details.html">portfolio Details</a>
                        </li>
                        <li>
                          <a href="team.html">team</a>
                        </li>
                        <li>
                          <a href="team-details.html">team Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">
                        News <i className="far fa-angle-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">News</a>
                        </li>
                        <li>
                          <a href="blog-details.html">News Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact" activeClassName="active">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-2 col-md-6 col-sm-6 col-6">
            <div className="header__bottom-right d-flex align-items-center justify-content-end">
              <div className="header__social mr-35 d-none d-xl-block">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header__action">
                <button
                  type="button"
                  className="dot-hamburger-btn sidebar-toggle-btn"
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

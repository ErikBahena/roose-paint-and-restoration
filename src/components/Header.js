import React, { useEffect } from "react";
import logo from "../assets/img/logo/lightLogo.png";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import siteInfo from "../../site/settings/siteInfo.json";

export default function Header({ handleMenuToggle }) {
  const services = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/services)/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
            urlRoute
          }
        }
      }
    }
  `);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector("#header-sticky");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  return (
    <div
      id="header-sticky"
      className="header__bottom pl-55 pr-55 header__padding"
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "100px",
                    padding: "10px 0px",
                  }}
                />
              </Link>
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
                        {services &&
                          services.allMarkdownRemark.nodes.map((service) => (
                            <li key={service.id}>
                              <Link
                                to={`/services/${service.frontmatter.urlRoute}`}
                                activeClassName="active"
                              >
                                {service.frontmatter.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                    <li>
                      <Link to="/gallery" activeClassName="active">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" activeClassName="active">
                        Blog
                      </Link>
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
                    <a
                      href={siteInfo.facebookLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteInfo.googleMapsAddressLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-google" />
                    </a>
                  </li>
                  {siteInfo.youtubeLink && (
                    <li>
                      <a
                        href={siteInfo.youtubeLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="header__action">
                <button
                  type="button"
                  className="dot-hamburger-btn sidebar-toggle-btn"
                  onClick={handleMenuToggle}
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

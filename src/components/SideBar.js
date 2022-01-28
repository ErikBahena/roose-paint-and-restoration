import React from "react";
import siteInfo from "../../site/settings/siteInfo.json";
import { Link } from "gatsby";
import { formatPhonePlain, isToday } from "../helpers";
import Logo from "../../static/img/logo/lightLogo.png";

export default function SideBar({ handleMenuToggle }) {
  return (
    <>
      <div className="body-overlay opened" onClick={handleMenuToggle} />
      <div className="sidebar__area sidebar-opened">
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={handleMenuToggle}
            >
              <i className="fal fa-times" />
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
              <Link to="/">
                <img
                  src={Logo}
                  style={{
                    maxHeight: "100px",
                    maxWidth: "maxContent",
                  }}
                  onClick={handleMenuToggle}
                  alt="logo"
                />
              </Link>
            </div>
            {/* Quick Links */}
            <div className="sidebar__contact mt-30 mb-20">
              <h4>Quick Links</h4>
              <div className="sidebar__contact-text">
                <Link to="/" className="pr-10 pb-8" onClick={handleMenuToggle}>
                  Home
                </Link>
                <Link
                  to="/about"
                  className="pr-10 pb-8"
                  onClick={handleMenuToggle}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="pr-10 pb-8"
                  onClick={handleMenuToggle}
                >
                  Contact
                </Link>
              </div>

              <div className="sidebar__contact-text">
                <Link
                  to="/services"
                  className="pr-10 pb-8"
                  onClick={handleMenuToggle}
                >
                  Services
                </Link>
                <Link
                  to="/gallery"
                  className="pr-10 pb-8"
                  onClick={handleMenuToggle}
                >
                  Gallery
                </Link>
                <Link
                  to="/blog"
                  className="pr-10 pb-8"
                  onClick={handleMenuToggle}
                >
                  Blog
                </Link>
              </div>
            </div>
            {/* Business Hours */}
            <div className="sidebar__contact mt-30 mb-20">
              <h4>Business Hours</h4>
              <div className="footer__widget-about onSideBar">
                <ul>
                  <li className={isToday("Monday") ? "active" : ""}>
                    Monday: <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className={isToday("Tuesday") ? "active" : ""}>
                    Tuesday: <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className={isToday("Wednesday") ? "active" : ""}>
                    Wednesday: <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className={isToday("Thursday") ? "active" : ""}>
                    Thursday: <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className={isToday("Friday") ? "active" : ""}>
                    Friday: <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className={isToday("Saturday", "Sunday") ? "active" : ""}>
                    Saturday & Sunday: <span>Closed</span>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>

            <div className="sidebar__map d-none d-lg-block mb-15">
              <iframe
                src={siteInfo.googleMapsEmbedLink}
                loading="lazy"
                title="interactive google maps for business location"
              />
            </div>

            {/* Contact Info */}
            <div className="sidebar__contact mt-30 mb-20">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="sidebar__contact-text">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={siteInfo.googleMapsAddressLink}
                    >
                      {siteInfo.fullBusinessAddress || siteInfo.headerAddress}
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="far fa-phone" />
                  </div>
                  <div className="sidebar__contact-text">
                    <a href={`tel:${formatPhonePlain(siteInfo.phone)}`}>
                      {siteInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="sidebar__contact-text">
                    <a href={`mailto:${siteInfo.supportEmail}`}>
                      {siteInfo.supportEmail}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Socials */}
            <div className="sidebar__social">
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
          </div>
        </div>
      </div>
    </>
  );
}

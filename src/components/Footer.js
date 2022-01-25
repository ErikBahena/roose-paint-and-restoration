import React from "react";
import { Link } from "gatsby";

import darkLogo from "../assets/img/logo/darkLogo.png";

// import brandImg1 from "../assets/img/brand/brand-1.png";
// import brandImg2 from "../assets/img/brand/brand-2.png";
// import brandImg3 from "../assets/img/brand/brand-3.png";
// import brandImg4 from "../assets/img/brand/brand-4.png";
// import brandImg5 from "../assets/img/brand/brand-5.png";
// import brandImg6 from "../assets/img/brand/brand-6.png";

import { formatPhonePlain, isToday } from "../helpers";
import siteInfo from "../../site/settings/siteInfo.json";

export default function Footer() {
  return (
    <footer>
      <div className="footer__area black-bg">
        <div className="footer__top pb-35">
          <div className="container">
            {/* <div className="row">
              <div className="col-xxl-12">
                <div className="brand__wrapper brand__bg">
                  <div className="brand__slider swiper-container pt-75 pb-80 black-bg-4">
                    <div className="swiper-wrapper align-items-center">
                      <div className="brand__item swiper-slide">
                        <img src={brandImg1} alt="img brand1" />
                      </div>
                      <div className="brand__item swiper-slide">
                        <img src={brandImg2} alt="img brand2" />
                      </div>
                      <div className="brand__item swiper-slide">
                        <img src={brandImg3} alt="img brand3" />
                      </div>
                      <div className="brand__item swiper-slide">
                        <img src={brandImg4} alt="img brand4" />
                      </div>
                      <div className="brand__item swiper-slide">
                        <img src={brandImg5} alt="img brand5" />
                      </div>
                      <div className="brand__item swiper-slide">
                        <img src={brandImg6} alt="img brand6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-top">
                    <h3 className="footer__widget-title">Business Hours</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__widget-about">
                      <ul>
                        <li className={isToday("Monday") && "active"}>
                          Monday: <span>8:00 AM - 5:00 PM</span>
                        </li>
                        <li className={isToday("Tuesday") && "active"}>
                          Tuesday: <span>8:00 AM - 5:00 PM</span>
                        </li>
                        <li className={isToday("Wednesday") && "active"}>
                          Wednesday: <span>8:00 AM - 5:00 PM</span>
                        </li>
                        <li className={isToday("Thursday") && "active"}>
                          Thursday: <span>8:00 AM - 5:00 PM</span>
                        </li>
                        <li className={isToday("Friday") && "active"}>
                          Friday: <span>8:00 AM - 5:00 PM</span>
                        </li>
                        <li
                          className={isToday("Saturday", "Sunday") && "active"}
                        >
                          Saturday & Sunday: <span>Closed</span>
                        </li>
                        {/* <li>Sunday: Closed</li> */}
                      </ul>
                      <p></p>
                      <div className="footer__logo">
                        <a href="/">
                          <img
                            src={darkLogo}
                            alt="logo"
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget pl-60 footer__pr-40 mb-50">
                  <div className="footer__widget-top">
                    <h3 className="footer__widget-title">Quick Links</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__link">
                      <ul>
                        <li>
                          <Link to="/gallery">The Gallery</Link>
                        </li>
                        <li>
                          <Link to="/">Home Page</Link>
                        </li>
                        <li>
                          <Link to="/about">About Page</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Page</Link>
                        </li>
                        <li>
                          <a href="/">Residential Interior</a>
                        </li>
                        <li>
                          <a href="/">Commercial Interior</a>
                        </li>
                        <li>
                          <a href="/">Industrial Interior</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget pl-20 footer__pr-50 mb-50">
                  <div className="footer__widget-top">
                    <h3 className="footer__widget-title">Contact Us</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__info">
                      <ul>
                        <li className="d-flex align-items-start">
                          <div className="footer__info-icon mr-20">
                            <i className="fal fa-map-marker-alt" />
                          </div>
                          <div className="footer__info-text">
                            <h4>Locations</h4>
                            <a
                              target="_blank"
                              href={siteInfo.googleMapsAddressLink}
                            >
                              {siteInfo?.fullBusinessAddress ||
                                siteInfo?.headerAddress}
                            </a>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <div className="footer__info-icon mr-20">
                            <i className="far fa-envelope-open" />
                          </div>
                          <div className="footer__info-text">
                            <h4>Email Us</h4>
                            <a href={`mailto:${siteInfo.supportEmail}`}>
                              {siteInfo.supportEmail}
                            </a>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <div className="footer__info-icon mr-20">
                            <i className="fal fa-phone" />
                          </div>
                          <div className="footer__info-text">
                            <h4>Phone Us</h4>
                            <a href={`tel:${formatPhonePlain(siteInfo.phone)}`}>
                              {siteInfo.phone}
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-top">
                    <h3 className="footer__widget-title">Newsletter</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__subscribe">
                      <p>
                        Sed ut perspiciati unde omnis iste natus error sit
                        voluptatem accusantium
                      </p>
                      <div className="footer__subscribe-form">
                        <form action="#">
                          <input type="email" placeholder="Enter Your Email" />
                          <button type="submit" className="link-btn-2">
                            subscribe
                            <i className="far fa-arrow-right" />
                            <i className="far fa-arrow-right" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-border">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__social">
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
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright text-sm-end">
                    <p>© {siteInfo.copyRight}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../assets/scss/main.scss";

import "../assets/css/preloader.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/meanmenu.css";
import "../assets/css/animate.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/swiper-bundle.css";
import "../assets/css/backToTop.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/nice-select.css";
import "../assets/css/circularProgressBar.css";
import "../assets/css/fontAwesome5Pro.css";
import "../assets/css/flaticon.css";
import "../assets/css/default.css";
import "../assets/css/style.css";

import HeaderTop from "../components/HeaderTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SideBar from "../components/SideBar";

const Layout = ({ children, data }) => {
  const [sideBarOpen, setSiteBarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSiteBarOpen(!sideBarOpen);
  };

  return (
    <div>
      <Helmet>
        <link
          href="../../static/admin/config.yml"
          type="text/yaml"
          rel="cms-config-url"
        />
      </Helmet>
      <BackToTop />
      <div className="header__area">
        <HeaderTop />
        <Header handleMenuToggle={handleMenuToggle} />
      </div>
      {sideBarOpen && <SideBar handleMenuToggle={handleMenuToggle} />}

      <div>{children}</div>

      <Footer />

      {/*  JS here  */}
      <script src="../assets/js/vendor/jquery-3.6.0.min.js" />
      <script src="../assets/js/vendor/waypoints.min.js" />
      <script src="../assets/js/bootstrap.bundle.min.js" />
      <script src="../assets/js/meanmenu.js" />
      <script src="../assets/js/swiper-bundle.min.js" />
      <script src="../assets/js/owl.carousel.min.js" />
      <script src="../assets/js/magnific-popup.min.js" />
      <script src="../assets/js/parallax.min.js" />
      <script src="../assets/js/backToTop.js" />
      <script src="../assets/js/nice-select.min.js" />
      <script src="../assets/js/counterup.min.js" />
      <script src="../assets/js/jquery.appear.js" />
      <script src="../assets/js/jquery.knob.js" />
      <script src="../assets/js/ajax-form.js" />
      <script src="../assets/js/wow.min.js" />
      <script src="../assets/js/isotope.pkgd.min.js" />
      <script src="../assets/js/imagesloaded.pkgd.min.js" />
      <script src="../assets/js/main.js" />
    </div>
  );
};

export default Layout;

import * as React from "react";
import { Helmet } from "react-helmet";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import HeaderTop from "./HeaderTop";
import Header from "./Header";
import Footer from "../components/Footer";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div className="header__area">
        <HeaderTop />
        <Header />
      </div>
      <div>{children}</div>
      <Footer />
      {/*  JS here  */}
      <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
      <script src="assets/js/vendor/waypoints.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/meanmenu.js"></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/magnific-popup.min.js"></script>
      <script src="assets/js/parallax.min.js"></script>
      <script src="assets/js/backToTop.js"></script>
      <script src="assets/js/nice-select.min.js"></script>
      <script src="assets/js/counterup.min.js"></script>
      <script src="assets/js/jquery.appear.js"></script>
      <script src="assets/js/jquery.knob.js"></script>
      <script src="assets/js/ajax-form.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/isotope.pkgd.min.js"></script>
      <script src="assets/js/imagesloaded.pkgd.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default TemplateWrapper;

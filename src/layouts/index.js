import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "../assets/scss/main.scss";
import "../assets/css/bootstrap.min.css";
import "../assets/css/fontAwesome5Pro.css";
import "../assets/css/flaticon.css";
import "../assets/css/default.css";
import "../assets/css/style.css";

import HeaderTop from "../components/HeaderTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <script src="https://apps.elfsight.com/p/platform.js" defer />
      </Helmet>

      <div className="header__area">
        <HeaderTop />
        <Header handleMenuToggle={handleMenuToggle} />
      </div>

      {sideBarOpen && <SideBar handleMenuToggle={handleMenuToggle} />}

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;

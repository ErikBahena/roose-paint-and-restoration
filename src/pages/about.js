import React from "react";
import PageTitle from "../components/PageTitle";
import MainSection from "../components/about/MainSection";
import AboutTeam from "../components/about/AboutTeam";
import AboutWhy from "../components/about/AboutWhy";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet";

export default function about({ location }) {
  return (
    <>
      <Helmet>
        <script src="https://apps.elfsight.com/p/platform.js" defer />
      </Helmet>
      <PageTitle location={location} />
      <MainSection />
      <AboutWhy />
      <AboutTeam />
      <Testimonials />
    </>
  );
}

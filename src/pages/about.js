import React from "react";
import PageTitle from "../components/PageTitle";
import MainSection from "../components/about/mainSection";
import AboutTeam from "../components/about/AboutTeam";
import AboutWhy from "../components/about/AboutWhy";

export default function about({ location }) {
  return (
    <>
      <PageTitle location={location} />
      <MainSection />
      <AboutWhy />
      <AboutTeam />
    </>
  );
}

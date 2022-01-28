import React from "react";
import PageTitle from "../components/PageTitle";
import MainSection, {
  MainSectionTemplate,
} from "../components/about/MainSection";
// import AboutTeam from "../components/about/AboutTeam";
import AboutWhy, { AboutWhyTemplate } from "../components/about/AboutWhy";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet";
import Services from "../components/Services";

export default function about({
  isTemplate,
  firstSectionContent,
  secondSectionContent,
  location,
}) {
  return (
    <>
      <Helmet>
        <script src="https://apps.elfsight.com/p/platform.js" defer />
      </Helmet>
      <PageTitle location={isTemplate ? "About" : location} />

      {isTemplate ? (
        <MainSectionTemplate {...firstSectionContent} isTemplate={isTemplate} />
      ) : (
        <MainSection />
      )}

      {isTemplate ? (
        <AboutWhyTemplate {...secondSectionContent} isTemplate={isTemplate} />
      ) : (
        <AboutWhy />
      )}

      {!isTemplate && <Services />}
      <Testimonials />
    </>
  );
}

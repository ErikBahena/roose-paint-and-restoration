import React from "react";
import HomeAbout, { HomeAboutTemplate } from "../components/home/HomeAbout";
import HomeTitle, { HomeTitleTemplate } from "../components/home/HomeTitle";
import Services, { ServicesTemplate } from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function index({
  homeTitleContent,
  aboutContent,
  servicesContent,
  isPreview,
}) {
  return (
    <>
      {isPreview ? <HomeTitleTemplate {...homeTitleContent} /> : <HomeTitle />}
      {isPreview ? <HomeAboutTemplate {...aboutContent} /> : <HomeAbout />}
      {isPreview ? <ServicesTemplate {...servicesContent} /> : <Services />}
      <Testimonials />
    </>
  );
}

import React from "react";
import PageTitle from "../../components/PageTitle";
import Testimonials from "../../components/Testimonials";
import Services from "../../components/Services";
export default function index({ location }) {
  return (
    <>
      <PageTitle location={location} />
      <Services />
      <Testimonials />
    </>
  );
}

import React from "react";
import PageTitle from "../../components/PageTitle";
import Testimonials from "../../components/Testimonials";

export default function index({ location }) {
  return (
    <>
      <PageTitle location={location} />
      <Testimonials />
    </>
  );
}

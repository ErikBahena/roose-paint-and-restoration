import React from "react";
import PageTitle from "../components/PageTitle";
import MainSection from "../components/about/mainSection";

export default function about({ location }) {
  return (
    <>
      <PageTitle location={location} />
      <MainSection />
    </>
  );
}

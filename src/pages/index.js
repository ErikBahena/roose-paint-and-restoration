import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import HomeTitle from "../components/home/HomeTitle";
import Services from "../components/Services";

export default function index() {
  return (
    <>
      <HomeTitle />
      <HomeAbout />
      <Services />
    </>
  );
}

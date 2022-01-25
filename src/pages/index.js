import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import HomeTitle from "../components/home/HomeTitle";
import Services from "../components/Services";

export default function index({ homeTitleContent, aboutContent }) {
  return (
    <>
      <HomeTitle {...homeTitleContent} />
      <HomeAbout {...aboutContent} />
      {/* <Services /> */}
    </>
  );
}

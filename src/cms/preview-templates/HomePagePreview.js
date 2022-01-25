import React from "react";
import HomePage from "../../pages/index";

export default function HomePagePreview({ entry, getAsset }) {
  let homeTitleContent = {
    buttonText: entry.getIn(["data", "buttonText"]),
    tagline: entry.getIn(["data", "mainTagline"]),
    title: entry.getIn(["data", "mainTitle"]),
    image: getAsset(entry.getIn(["data", "mainImage"])),
  };

  let aboutContent = {
    tagline: entry.getIn(["data", "aboutTagline"]),
    title: entry.getIn(["data", "aboutTitle"]),
    subtitle: entry.getIn(["data", "aboutSubtitle"]),
    description: entry.getIn(["data", "aboutDescription"]),
    companyOwnerName: entry.getIn(["data", "companyOwnerName"]),
    companyOwnerTitle: entry.getIn(["data", "companyOwnerTitle"]),
    largeAboutImage: getAsset(entry.getIn(["data", "largeAboutImage"])),
    circleAboutImage: getAsset(entry.getIn(["data", "circleAboutImage"])),
    companyOwnerImage: getAsset(entry.getIn(["data", "companyOwnerImage"])),
    companyOwnerSignature: getAsset(
      entry.getIn(["data", "companyOwnerSignature"])
    ),
  };

  return (
    <HomePage homeTitleContent={homeTitleContent} aboutContent={aboutContent} />
  );
}

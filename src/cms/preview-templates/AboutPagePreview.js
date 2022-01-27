import { first } from "lodash";
import React from "react";
import AboutPage from "../../pages/about";

export default function AboutPagePreview({ entry, getAsset }) {
  let firstSectionContent = {
    tagline: entry.getIn(["data", "mainTagline"]),
    title: entry.getIn(["data", "mainTitle"]),
    description: entry.getIn(["data", "description"]),

    card1Title: entry.getIn(["data", "card1Title"]),
    card1Description: entry.getIn(["data", "card1Description"]),
    card1Link: entry.getIn(["data", "card1Link"]),

    card2Title: entry.getIn(["data", "card2Title"]),
    card2Description: entry.getIn(["data", "card2Description"]),
    card2Link: entry.getIn(["data", "card2Link"]),

    upperLeftImage: getAsset(entry.getIn(["data", "upperLeftImage"])),
    upperRightImage: getAsset(entry.getIn(["data", "upperRightImage"])),
    lowerLeftImage: getAsset(entry.getIn(["data", "lowerLeftImage"])),
    lowerRightImage: getAsset(entry.getIn(["data", "lowerRightImage"])),
  };

  let secondSectionContent = {
    section2Image: getAsset(entry.getIn(["data", "section2Image"])),
    tagline: entry.getIn(["data", "section2Tagline"]),
    title: entry.getIn(["data", "section2Title"]),
    description: entry.getIn(["data", "section2Description"]),

    descriptor1Title: entry.getIn(["data", "section2Descriptor1Title"]),
    descriptor1Description: entry.getIn([
      "data",
      "section2Descriptor1Description",
    ]),
    descriptor1Image: getAsset(
      entry.getIn(["data", "section2Descriptor1Image"])
    ),

    descriptor2Title: entry.getIn(["data", "section2Descriptor2Title"]),
    descriptor2Description: entry.getIn([
      "data",
      "section2Descriptor2Description",
    ]),
    descriptor2Image: getAsset(
      entry.getIn(["data", "section2Descriptor2Image"])
    ),

    descriptor3Title: entry.getIn(["data", "section2Descriptor3Title"]),
    descriptor3Description: entry.getIn([
      "data",
      "section2Descriptor3Description",
    ]),
    descriptor3Image: getAsset(
      entry.getIn(["data", "section2Descriptor3Image"])
    ),
  };
  return (
    <AboutPage
      isTemplate={true}
      firstSectionContent={firstSectionContent}
      secondSectionContent={secondSectionContent}
    />
  );
}

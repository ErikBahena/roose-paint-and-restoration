import React from "react";
import HomeService from "../../templates/HomeService";
import ServiceDetails, {
  ServiceDetailsTemplate,
} from "../../templates/ServiceDetails";

export default function ServicePreview({ entry, getAsset }) {
  let bg = getAsset(entry.getIn(["data", "homeImage"])).toString();
  let title = entry.getIn(["data", "title"]);
  let description = entry.getIn(["data", "shortDescription"]);

  let serviceDetailsContent = {
    title,
    detailsImage: getAsset(entry.getIn(["data", "detailsImage"])).toString(),
    detailsDescription: entry.getIn(["data", "detailsDescription"]),
    featuresDescription: entry.getIn(["data", "detailsFeaturesDescription"]),
    beforeImage: getAsset(entry.getIn(["data", "beforeImage"])).toString(),
    afterImage: getAsset(entry.getIn(["data", "afterImage"])).toString(),
    resultsDescription: entry.getIn(["data", "resultsDescription"]),
    youtubeVideoEmbedLink: entry.getIn(["data", "youtubeVideoEmbedLink"]),
    actionImage: getAsset(entry.getIn(["data", "actionImage"])).toString(),
    actionTagline: entry.getIn(["data", "actionTagline"]),
    actionTitle: entry.getIn(["data", "actionTitle"]),
    actionButtonText: entry.getIn(["data", "actionButtonText"]),
    actionButtonLink: entry.getIn(["data", "actionButtonLink"]),
  };

  return (
    <>
      On Services Reel
      <HomeService bg={bg} title={title} description={description} />
      On Services Page
      <ServiceDetailsTemplate isPreview={true} {...serviceDetailsContent} />
    </>
  );
}

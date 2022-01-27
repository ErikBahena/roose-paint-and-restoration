import React from "react";
import HomeService from "../../templates/HomeService";

export default function ServicePreview({ entry, getAsset }) {
  let bg = getAsset(entry.getIn(["data", "homeImage"])).toString();
  let title = entry.getIn(["data", "title"]);
  let description = entry.getIn(["data", "shortDescription"]);

  return (
    <>
      On Home Page
      <HomeService bg={bg} title={title} description={description} />
    </>
  );
}

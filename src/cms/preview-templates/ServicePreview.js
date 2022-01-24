import React from "react";
import HomeService from "../../templates/HomeService";

export default function ServicePreview({ entry, getAsset }) {
  //   let bg = getAsset(entry.getIn(["data", "home_image"])).toString();
  //   const data = entry.get("data", "homeImage");
  let title = entry.getIn(["data", "title"]);
  let description = entry.getIn(["data", "shortDescription"]);

  return <>On Home Page {console.log(bg)};</>;
}

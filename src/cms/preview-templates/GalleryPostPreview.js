import React from "react";
import GalleryPost from "../../templates/GalleryPost";

// import "../../assets/css/style.css";
// import "../../assets/css/default.css";
// import "../../assets/css/bootstrap.min.css";
// import "../../assets/css/fontAwesome5Pro.css";
// import "../../assets/css/flaticon.css";

export const GalleryPostPreview = ({ entry, getAsset }) => {
  let bg = getAsset(entry.getIn(["data", "image"]));
  let title = entry.getIn(["data", "title"]);
  let description = entry.getIn(["data", "description"]);

  return <GalleryPost bg={bg} title={title} description={description} />;
};

export default GalleryPostPreview;

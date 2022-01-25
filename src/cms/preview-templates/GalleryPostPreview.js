import React from "react";
import GalleryPost from "../../templates/GalleryPost";

export const GalleryPostPreview = ({ entry, getAsset }) => {
  let bg = getAsset(entry.getIn(["data", "image"]));
  let title = entry.getIn(["data", "title"]);
  let description = entry.getIn(["data", "description"]);

  return <GalleryPost bg={bg} title={title} description={description} />;
};

export default GalleryPostPreview;

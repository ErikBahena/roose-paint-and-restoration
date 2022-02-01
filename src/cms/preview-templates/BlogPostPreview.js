import React from "react";
import { BlogPostDetailsTemplate } from "../../templates/BlogPostDetails";

export default function BlogPostPreview({ entry, getAsset }) {
  let blogDetails = {
    title: entry.getIn(["data", "title"]),
    publisherName: entry.getIn(["data", "publisherName"]),
    date: entry.getIn(["data", "date"]),
    body: entry.getIn(["data", "body"]),
    description: entry.getIn(["data", "description"]),
    image: getAsset(entry.getIn(["data", "image"])),
    headerImage: getAsset(entry.getIn(["data", "headerImage"])),
  };
  return <BlogPostDetailsTemplate {...blogDetails} isPreview={true} />;
}

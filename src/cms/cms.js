/* eslint-disable */
import CMS from "netlify-cms-app";
import GalleryPostPreview from "./preview-templates/GalleryPostPreview";
import ServicePreview from "./preview-templates/ServicePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";

// eslint-disable-next-line
import mainStyle from "../assets/css/style.css";
// eslint-disable-next-line
import defaultStyle from "../assets/css/default.css";
// eslint-disable-next-line
import bootstrapStyle from "../assets/css/bootstrap.min.css";
// eslint-disable-next-line
import mainScss from "../assets/scss/main.scss";
// eslint-disable-next-line
import flaticon from "../assets/css/flaticon.css";
// eslint-disable-next-line
import fontAwesome5Pro from "../assets/css/fontAwesome5Pro.css";

CMS.registerPreviewStyle(mainStyle, { raw: true });
CMS.registerPreviewStyle(defaultStyle, { raw: true });
CMS.registerPreviewStyle(bootstrapStyle, { raw: true });
CMS.registerPreviewStyle(mainScss, { raw: true });
CMS.registerPreviewStyle(flaticon, { raw: true });
CMS.registerPreviewStyle(fontAwesome5Pro, { raw: true });

CMS.registerPreviewTemplate("galleryPosts", GalleryPostPreview);
CMS.registerPreviewTemplate("services", ServicePreview);

CMS.registerPreviewTemplate("homeContent", HomePagePreview);
CMS.registerPreviewTemplate("aboutContent", AboutPagePreview);

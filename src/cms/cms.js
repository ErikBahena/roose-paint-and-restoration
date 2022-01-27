import CMS from "netlify-cms-app";
import GalleryPostPreview from "./preview-templates/GalleryPostPreview";
import ServicePreview from "./preview-templates/ServicePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";

import mainStyle from "../assets/css/style.css";
import defaultStyle from "../assets/css/default.css";
import bootstrapStyle from "../assets/css/bootstrap.min.css";
import mainScss from "../assets/scss/main.scss";
import flaticon from "../assets/css/flaticon.css";
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

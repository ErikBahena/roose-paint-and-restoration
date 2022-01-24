import CMS from "netlify-cms-app";
import GalleryPostPreview from "./preview-templates/GalleryPostPreview";
import ServicePreview from "./preview-templates/ServicePreview";

CMS.registerPreviewStyle("src/assets/css/style.css");
CMS.registerPreviewStyle("src/assets/css/default.css");
CMS.registerPreviewStyle("src/assets/css/bootstrap.min.css");
CMS.registerPreviewStyle("src/assets/scss/main.scss");
CMS.registerPreviewStyle("src/assets/css/flaticon.css");
CMS.registerPreviewStyle("src/assets/css/fontAwesome5Pro.css");

CMS.registerPreviewTemplate("galleryPosts", GalleryPostPreview);
CMS.registerPreviewTemplate("services", ServicePreview);

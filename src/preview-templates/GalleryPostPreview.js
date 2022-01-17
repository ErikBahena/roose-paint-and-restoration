import React from "react";
import PropTypes from "prop-types";

export const GalleryPostPreview = ({ entry, widgetFor, fieldsMetaData }) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      hello
      {/* <div className="portfolio__item-3 mb-30 p-relative fix">
      <div className="portfolio__thumb w-img">
        <img src={`${data.image.publicURL}`} alt="gallery post" />
      </div>
      <div className="portfolio__content-3 transition-3 d-flex align-items-center justify-content-between">
        <div className="portfolio__content-3-inner">
          <h3 className="portfolio__title-3">{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div className="portfolio__plus-3 transition-3">
          <a href={`${data.image.publicURL}`} className="popup-image">
            <i className="far fa-plus" />
          </a>
        </div>
      </div>
    </div> */}
    </div>
  );
};

// GalleryPostPreview.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// };

export default GalleryPostPreview;

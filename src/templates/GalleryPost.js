import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// eslint-disable-next-line
const GalleryPost = (data) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div className="portfolio__item-3 mb-30 p-relative fix">
        <div className="portfolio__thumb w-img">
          <img src={`${data.image.publicURL}`} />
        </div>
        <div className="portfolio__content-3 transition-3 d-flex align-items-center justify-content-between">
          <div className="portfolio__content-3-inner">
            <h3 className="portfolio__title-3">
              <a href="portfolio-details.html">{data.title}</a>
            </h3>
            <p>{data.description}</p>
          </div>
          <div className="portfolio__plus-3 transition-3">
            <a
              href="assets/img/portfolio/03/portfolio-1.jpg"
              className="popup-image"
            >
              <i className="far fa-plus" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

GalleryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default GalleryPost;

// export const pageQuery = graphql`
//   query GalleryPostByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//       }
//     }
//   }
// `;

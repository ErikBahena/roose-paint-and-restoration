import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

export const GalleryPostTemplate = ({ title, content, contentComponent }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GalleryPostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default GalleryPostTemplate;

export const GalleryPostTemplateQuery = graphql`
  query GalleryPosts($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

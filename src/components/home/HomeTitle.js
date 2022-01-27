import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

export default function HomeTitle() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/(content/homeContent)/" }) {
        frontmatter {
          mainTagline
          mainTitle
          mainImage {
            childImageSharp {
              fluid(maxWidth: 1920, maxHeight: 816) {
                src
              }
            }
          }
          buttonText
        }
      }
    }
  `);
  return (
    <HomeTitleTemplate
      title={data.markdownRemark.frontmatter.mainTitle}
      tagline={data.markdownRemark.frontmatter.mainTagline}
      image={
        data.markdownRemark.frontmatter.mainImage.childImageSharp.fluid.src
      }
      buttonText={data.markdownRemark.frontmatter.buttonText}
    />
  );
}

export const HomeTitleTemplate = ({ title, image, buttonText, tagline }) => {
  return (
    <section className="slider__area">
      <div className="slider__active swiper-container">
        <div className="swiper-wrapper">
          <div
            className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
            style={{
              backgroundImage: `url("${image || "/"}")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="slider__content text-center">
                    <span data-animation="fadeInUp" data-delay=".2s">
                      {tagline || "/"}
                    </span>
                    <h2
                      className="slider__title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      {title || "/"}
                    </h2>
                    <Link to="/services" className="r-btn">
                      {buttonText || "/"}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

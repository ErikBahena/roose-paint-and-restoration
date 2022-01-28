import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function AboutWhy() {
  const content = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/(content/aboutContent)/" }) {
        id
        frontmatter {
          section2Image {
            childImageSharp {
              fluid(maxWidth: 369, maxHeight: 356) {
                src
              }
            }
          }
          section2Tagline
          section2Title
          section2Description
          section2Descriptor1Image {
            childImageSharp {
              fluid(maxWidth: 369, maxHeight: 356) {
                src
              }
            }
          }
          section2Descriptor1Title
          section2Descriptor1Description
          section2Descriptor2Image {
            childImageSharp {
              fluid(maxWidth: 369, maxHeight: 356) {
                src
              }
            }
          }
          section2Descriptor2Title
          section2Descriptor2Description
          section2Descriptor3Image {
            childImageSharp {
              fluid(maxWidth: 369, maxHeight: 356) {
                src
              }
            }
          }
          section2Descriptor3Title
          section2Descriptor3Description
        }
      }
    }
  `);
  return (
    <AboutWhyTemplate
      section2Image={
        content.markdownRemark.frontmatter.section2Image.childImageSharp.fluid
          .src
      }
      tagline={content.markdownRemark.frontmatter.section2Tagline}
      title={content.markdownRemark.frontmatter.section2Title}
      description={content.markdownRemark.frontmatter.section2Description}
      descriptor1Title={
        content.markdownRemark.frontmatter.section2Descriptor1Title
      }
      descriptor1Description={
        content.markdownRemark.frontmatter.section2Descriptor1Description
      }
      descriptor1Image={
        content.markdownRemark.frontmatter.section2Descriptor1Image
          .childImageSharp.fluid.src
      }
      descriptor2Title={
        content.markdownRemark.frontmatter.section2Descriptor2Title
      }
      descriptor2Description={
        content.markdownRemark.frontmatter.section2Descriptor2Description
      }
      descriptor2Image={
        content.markdownRemark.frontmatter.section2Descriptor2Image
          .childImageSharp.fluid.src
      }
      descriptor3Title={
        content.markdownRemark.frontmatter.section2Descriptor3Title
      }
      descriptor3Description={
        content.markdownRemark.frontmatter.section2Descriptor3Description
      }
      descriptor3Image={
        content.markdownRemark.frontmatter.section2Descriptor3Image
          .childImageSharp.fluid.src
      }
    />
  );
}

export const AboutWhyTemplate = ({
  section2Image,
  tagline,
  title,
  description,
  descriptor1Title,
  descriptor1Description,
  descriptor1Image,
  descriptor2Title,
  descriptor2Description,
  descriptor2Image,
  descriptor3Title,
  descriptor3Description,
  descriptor3Image,
  isTemplate,
}) => {
  return (
    <section className="why__area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="why__thumb why__thumb-2 pr-70 w-img">
              <img
                src={section2Image}
                style={isTemplate && { maxWidth: "600px", maxHeight: "693px" }}
                alt="about page graphical"
              />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="why__wrapper-2 pt-25 pr-30">
              <div className="section__title-wrapper-2 mb-30">
                <span className="section__title-pre section__title-pre-2">
                  {tagline}
                </span>
                <h2 className="section__title section__title-2">{title}</h2>
              </div>
              <p>{description}</p>
              <div className="why__item-wrapper">
                <div className="why__item-2 d-flex align-items-start">
                  <div className="why__icon-2 mr-30">
                    <img
                      src={descriptor1Image}
                      style={
                        isTemplate && { maxWidth: "73px", maxHeight: "73px" }
                      }
                      alt="about page why icon"
                    />
                  </div>
                  <div className="why__content-2">
                    <h3 className="why__title-2">{descriptor1Title}</h3>
                    <p>{descriptor1Description}</p>
                  </div>
                </div>
                <div className="why__item-2 d-flex align-items-start">
                  <div className="why__icon-2 mr-30">
                    <img
                      src={descriptor2Image}
                      style={
                        isTemplate && { maxWidth: "73px", maxHeight: "73px" }
                      }
                      alt="about page why icon"
                    />
                  </div>
                  <div className="why__content-2">
                    <h3 className="why__title-2">{descriptor2Title}</h3>
                    <p>{descriptor2Description}</p>
                  </div>
                </div>
                <div className="why__item-2 d-flex align-items-start">
                  <div className="why__icon-2 mr-30">
                    <img
                      src={descriptor3Image}
                      style={
                        isTemplate && { maxWidth: "73px", maxHeight: "73px" }
                      }
                      alt="about page why icon"
                    />
                  </div>
                  <div className="why__content-2">
                    <h3 className="why__title-2">{descriptor3Title}</h3>
                    <p>{descriptor3Description}</p>
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

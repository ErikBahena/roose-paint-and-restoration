import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function HomeAbout() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/(content/homeContent)/" }) {
        frontmatter {
          aboutDescription
          aboutSubtitle
          aboutTagline
          aboutTitle
          companyOwnerName
          companyOwnerTitle
          circleAboutImage {
            childImageSharp {
              fluid(maxWidth: 360, maxHeight: 360) {
                src
              }
            }
          }
          largeAboutImage {
            childImageSharp {
              fluid(maxWidth: 570, maxHeight: 575) {
                src
              }
            }
          }
          companyOwnerImage {
            childImageSharp {
              fluid(maxWidth: 75, maxHeight: 75) {
                src
              }
            }
          }
          companyOwnerSignature {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 75) {
                src
              }
            }
          }
        }
      }
    }
  `);

  return (
    <HomeAboutTemplate
      description={data.markdownRemark.frontmatter.aboutDescription}
      subtitle={data.markdownRemark.frontmatter.aboutSubtitle}
      tagline={data.markdownRemark.frontmatter.aboutTagline}
      title={data.markdownRemark.frontmatter.aboutTitle}
      companyOwnerName={data.markdownRemark.frontmatter.companyOwnerName}
      companyOwnerTitle={data.markdownRemark.frontmatter.companyOwnerTitle}
      largeAboutImage={
        data.markdownRemark.frontmatter.largeAboutImage.childImageSharp.fluid
          .src
      }
      circleAboutImage={
        data.markdownRemark.frontmatter.circleAboutImage.childImageSharp.fluid
          .src
      }
      companyOwnerImage={
        data.markdownRemark.frontmatter.companyOwnerImage.childImageSharp.fluid
          .src
      }
      companyOwnerSignature={
        data.markdownRemark.frontmatter.companyOwnerSignature.childImageSharp
          .fluid.src
      }
    />
  );
}

export const HomeAboutTemplate = ({
  title,
  tagline,
  subtitle,
  description,
  companyOwnerName,
  companyOwnerTitle,
  largeAboutImage,
  circleAboutImage,
  companyOwnerImage,
  companyOwnerSignature,
  isPreview,
}) => {
  return (
    <section className="about__area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6 col-lg-5">
            <div className="about__thumb about__triangle p-relative">
              <div className="about__thumb-1 w-img">
                <img
                  src={largeAboutImage}
                  style={isPreview && { maxWidth: "570px", maxHeight: "575px" }}
                  alt="about us on home page"
                />
              </div>
              <div className="about__thumb-2 text-end">
                <img
                  src={circleAboutImage}
                  style={isPreview && { maxWidth: "360px", maxHeight: "360px" }}
                  alt="about us on home page"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="about__content pl-60 pt-25">
              <div className="section__title-wrapper mb-25">
                <span className="section__title-pre">{tagline}</span>
                <h2 className="section__title">{title}</h2>
              </div>
              <p className="bold-text">{subtitle}</p>
              <p>{description}</p>
              <div className="about__author d-sm-flex align-items-center">
                <div className="about__author-content d-flex align-items-center mr-35">
                  <div className="about__author-avater mr-20">
                    <img
                      src={companyOwnerImage}
                      style={
                        isPreview && { maxWidth: "75px", maxHeight: "75px" }
                      }
                      alt="company owner"
                    />
                  </div>
                  <div className="about__author-info">
                    <h3>{companyOwnerName}</h3>
                    <span>{companyOwnerTitle}</span>
                  </div>
                </div>
                <div className="about__author-signature">
                  <img
                    src={companyOwnerSignature}
                    style={
                      isPreview && { maxWidth: "120px", maxHeight: "75px" }
                    }
                    alt="company owner signature"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import PageTitle from "../components/PageTitle";
import Testimonials from "../components/Testimonials";
import { Link } from "gatsby";
import { graphql } from "gatsby";

export default function ServiceDetails({ data }) {
  return (
    <main>
      <PageTitle location={data.markdownRemark.frontmatter.title} />
      <ServiceDetailsTemplate
        title={data.markdownRemark.frontmatter.title}
        detailsImage={
          data.markdownRemark.frontmatter.detailsImage.childImageSharp.fluid.src
        }
        detailsDescription={data.markdownRemark.frontmatter.detailsDescription}
        featuresDescription={
          data.markdownRemark.frontmatter.detailsFeaturesDescription
        }
        beforeImage={
          data.markdownRemark.frontmatter.beforeImage.childImageSharp.fluid.src
        }
        afterImage={
          data.markdownRemark.frontmatter.afterImage.childImageSharp.fluid.src
        }
        resultsDescription={data.markdownRemark.frontmatter.resultsDescription}
        youtubeVideoEmbedLink={
          data.markdownRemark.frontmatter.youtubeVideoEmbedLink
        }
        sideRoutes={data.allMarkdownRemark}
        actionTagline={data.markdownRemark.frontmatter.actionTagline}
        actionTitle={data.markdownRemark.frontmatter.actionTitle}
        actionButtonText={data.markdownRemark.frontmatter.actionButtonText}
        actionButtonLink={data.markdownRemark.frontmatter.actionButtonLink}
        actionImage={
          data.markdownRemark.frontmatter.actionImage.childImageSharp.fluid.src
        }
      />
      <Testimonials />
    </main>
  );
}

export const query = graphql`
  query MyQuery($id: String) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/services)/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          urlRoute
        }
      }
    }

    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        youtubeVideoEmbedLink
        actionTagline
        actionTitle
        actionButtonText
        actionButtonLink

        actionImage {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 693) {
              src
            }
          }
        }
        afterImage {
          childImageSharp {
            fluid(maxWidth: 370, maxHeight: 370) {
              src
            }
          }
        }
        beforeImage {
          childImageSharp {
            fluid(maxWidth: 370, maxHeight: 370) {
              src
            }
          }
        }

        date
        description
        detailsDescription
        detailsFeaturesDescription

        detailsImage {
          childImageSharp {
            fluid(maxWidth: 770, maxHeight: 495) {
              src
            }
          }
        }

        resultsDescription
      }
    }
  }
`;

export const ServiceDetailsTemplate = ({
  title,
  detailsImage,
  detailsDescription,
  featuresDescription,
  beforeImage,
  afterImage,
  resultsDescription,
  youtubeVideoEmbedLink,
  isPreview,
  sideRoutes,
  actionImage,
  actionTagline,
  actionTitle,
  actionButtonText,
  actionButtonLink,
}) => {
  return (
    <section className="services__details-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="services__details-wrapper">
              <div className="services__details-thumb w-img mb-45">
                <img
                  src={detailsImage}
                  style={isPreview && { maxWidth: "770px", maxHeight: "495px" }}
                  alt="service details"
                />
              </div>
              <div className="services__details-text mb-25">
                <h3 className="services__details-title">{title}</h3>
                <p>{detailsDescription}</p>
              </div>
              <div className="services__details-text mb-50">
                <h3 className="services__details-title">Core Features</h3>
                <p>{featuresDescription}</p>
              </div>
              <div className="services__details-thumb w-img mb-10">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="services__details-thumb-inner mb-30">
                      <img
                        src={beforeImage}
                        style={
                          isPreview && { maxWidth: "370px", maxHeight: "370px" }
                        }
                        alt="service details before"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="services__details-thumb-inner mb-30">
                      <img
                        src={afterImage}
                        style={
                          isPreview && { maxWidth: "370px", maxHeight: "370px" }
                        }
                        alt="service details after"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__details-text mb-45">
                <h3 className="services__details-title">Service Results</h3>
                <p>{resultsDescription}</p>
              </div>
              {youtubeVideoEmbedLink && (
                <div className="video-container">
                  <iframe
                    width="100%"
                    src={youtubeVideoEmbedLink}
                    title="YouTube video player"
                    frameBorder="20"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="services__sidebar">
              <div className="services__widget mb-30">
                <div className="services__widget-content">
                  <div className="services__widget-links">
                    <ul>
                      {sideRoutes &&
                        sideRoutes.nodes.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services/${service.frontmatter.urlRoute}`}
                            >
                              {service.frontmatter.title}{" "}
                              <i className="fal fa-long-arrow-right" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="services__sidebar-banner w-img text-center p-relative">
                <img
                  src={actionImage}
                  style={isPreview && { maxWidth: "370px", maxHeight: "480px" }}
                  alt="contact us banner"
                />
                <div className="services__sidebar-banner-content">
                  <h6>{actionTagline}</h6>

                  <h4>{actionTitle}</h4>
                  <a
                    href={actionButtonLink}
                    target="_blank"
                    rel="noreferrer"
                    className="r-btn r-btn-black"
                  >
                    {actionButtonText} <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

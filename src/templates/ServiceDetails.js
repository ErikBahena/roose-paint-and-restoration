import React from "react";
import PageTitle from "../components/PageTitle";
import Testimonials from "../components/Testimonials";
import { Link } from "gatsby";
import { graphql } from "gatsby";

export default function ServiceDetails({ data, location }) {
  return (
    <main>
      <PageTitle location={location} />
      <section className="services__details-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="services__details-wrapper">
                <div className="services__details-thumb w-img mb-45">
                  <img
                    src={data.markdownRemark.frontmatter.detailsImage.publicURL}
                    alt="service details image"
                  />
                </div>
                <div className="services__details-text mb-25">
                  <h3 className="services__details-title">
                    {data.markdownRemark.frontmatter.title}
                  </h3>
                  <p>{data.markdownRemark.frontmatter.detailsDescription}</p>
                </div>
                <div className="services__details-text mb-50">
                  <h3 className="services__details-title">Core Features</h3>
                  <p>
                    {data.markdownRemark.frontmatter.detailsFeaturesDescription}
                  </p>
                </div>
                <div className="services__details-thumb w-img mb-10">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="services__details-thumb-inner mb-30">
                        <img
                          src={
                            data.markdownRemark.frontmatter.beforeImage
                              .publicURL
                          }
                          alt="service details before"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="services__details-thumb-inner mb-30">
                        <img
                          src={
                            data.markdownRemark.frontmatter.afterImage.publicURL
                          }
                          alt="service details after"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="services__details-text mb-45">
                  <h3 className="services__details-title">
                    Painting Service Results
                  </h3>
                  <p>{data.markdownRemark.frontmatter.resultsDescription}</p>
                </div>
                <div className="video__wrapper video__overlay w-img p-relative">
                  <img
                    src="assets/img/services/details/services-details-video.jpg"
                    alt="service details video thumbnail"
                  />
                  <div className="video__play">
                    <a
                      href="https://youtu.be/-WRZI63emjs"
                      className="video__play-btn popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="services__sidebar">
                <div className="services__widget mb-30">
                  <div className="services__widget-content">
                    <div className="services__widget-links">
                      <ul>
                        {data.allMarkdownRemark &&
                          data.allMarkdownRemark.nodes.map((service) => (
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
                    src="https://via.placeholder.com/600x693"
                    alt="contact us banner"
                  />
                  <div className="services__sidebar-banner-content">
                    <h6>Need Help</h6>
                    <h4>Make An Appointment</h4>
                    <a
                      href="https://clienthub.getjobber.com/client_hubs/66a10fe9-55e4-46ed-b1f4-f244789fa028/public/work_request/new?source=social_media"
                      target="_blank"
                      rel="noreferrer"
                      className="r-btn r-btn-black"
                    >
                      get started <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
        afterImage {
          publicURL
        }
        beforeImage {
          publicURL
        }
        date
        description
        detailsDescription
        detailsFeaturesDescription
        detailsImage {
          publicURL
        }
        resultsDescription
      }
    }
  }
`;

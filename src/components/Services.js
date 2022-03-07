import React from "react";
import HomeService from "../templates/HomeService";
import { useStaticQuery, graphql } from "gatsby";

const Services = () => {
  const services = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/services)/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
            shortDescription
            homeImage {
              childImageSharp {
                fluid(maxWidth: 370, maxHeight: 250) {
                  src
                }
              }
            }
            urlRoute
          }
        }
      }

      markdownRemark(fileAbsolutePath: { regex: "/(content/homeContent)/" }) {
        frontmatter {
          servicesTitle
          servicesTagline
        }
      }
    }
  `);

  return (
    <ServicesTemplate
      services={services.allMarkdownRemark.nodes}
      tagline={services.markdownRemark.frontmatter.servicesTagline}
      title={services.markdownRemark.frontmatter.servicesTitle}
    />
  );
};

export default Services;

export const ServicesTemplate = ({ tagline, title, services }) => {
  return (
    <section className="services__area p-relative z-index-11 pt-130 pb-55">
      <div
        className="services__bg"
        data-background="assets/img/services/services-bg.jpg"
      />
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="section__title-wrapper mb-80 text-center">
              <span className="section__title-pre section__title-pre-black center">
                {tagline}
              </span>
              <h2 className="section__title section__title-black">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services?.length > 0 ? (
            services.map((service) => {
              return <HomeService key={service.id} {...service} />;
            })
          ) : (
            <h2>...do not show on preview</h2>
          )}
        </div>
      </div>
    </section>
  );
};

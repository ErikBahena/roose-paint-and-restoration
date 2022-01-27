import React from "react";
import { Link } from "gatsby";

export default function HomeService(data) {
  // isLimit checks if this component is being called through the cms preview, if it is since the cms preview won't have gatsbys childImageSharp fluid sizer, we have to do it manually
  let isLimit = data.bg;

  return (
    <div
      className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
      style={isLimit && { maxWidth: "370px" }}
    >
      <div className="services__item p-relative mb-30">
        <div className="services__thumb w-img">
          <img
            style={isLimit && { maxHeight: "370px", maxHeight: "370px" }}
            src={
              data.bg || data.frontmatter?.homeImage.childImageSharp.fluid.src
            }
            alt="service"
          />
        </div>
        <div className="services__content text-center">
          <div className="services__icon">
            <i className="flaticon-paint-1" />
          </div>
          <h3 className="services__title">
            <a href="services-details.html">
              {data.title || data.frontmatter?.title}
            </a>
          </h3>
          <p>{data.description || data.frontmatter?.shortDescription}</p>
          <Link
            to={`/services/${data.frontmatter?.urlRoute}` || "/"}
            className="link-btn-2"
          >
            read more
            <i className="far fa-arrow-right" />
            <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

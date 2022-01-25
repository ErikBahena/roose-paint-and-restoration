import React from "react";

export default function HomeAbout({
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
}) {
  return (
    <section className="about__area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6 col-lg-5">
            <div className="about__thumb about__triangle p-relative">
              <div className="about__thumb-1 w-img">
                <img src={largeAboutImage || "/"} alt="about us on home page" />
              </div>
              <div className="about__thumb-2 text-end">
                <img
                  src={circleAboutImage || "/"}
                  alt="about us on home page"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="about__content pl-60 pt-25">
              <div className="section__title-wrapper mb-25">
                <span className="section__title-pre">{tagline || "/"}</span>
                <h2 className="section__title">{title || "/"}</h2>
              </div>
              <p className="bold-text">{subtitle || "/"}</p>
              <p>{description || "/"}</p>
              <div className="about__author d-sm-flex align-items-center">
                <div className="about__author-content d-flex align-items-center mr-35">
                  <div className="about__author-avater mr-20">
                    <img src={companyOwnerImage || "/"} alt="company owner" />
                  </div>
                  <div className="about__author-info">
                    <h3>{companyOwnerName || "/"}</h3>
                    <span>{companyOwnerTitle || "/"}</span>
                  </div>
                </div>
                <div className="about__author-signature">
                  <img
                    src={companyOwnerSignature || "/"}
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
}

import React from "react";

export default function MainSection() {
  return <div>working , route to template</div>;
}

export const MainSectionTemplate = ({
  tagline,
  title,
  description,
  card1Title,
  card1Description,
  card1Link,
  card2Title,
  card2Description,
  card2Link,
  upperLeftImage,
  upperRightImage,
  lowerLeftImage,
  lowerRightImage,
}) => {
  return (
    <section className="about__area p-relative z-index-1 pt-130 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-6">
                <div className="about__thumb w-img mb-30">
                  <img
                    className="about-1"
                    src={upperLeftImage}
                    alt="about page"
                  />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <div className="about__thumb mt-45 pr-50 mb-30 w-img">
                  <img
                    className="about-2"
                    src={upperRightImage}
                    alt="about page"
                  />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <div className="about__thumb pl-50 mb-30 w-img d-none d-sm-block">
                  <img
                    className="about-3"
                    src={lowerLeftImage}
                    alt="about page"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-6">
                <div className="about__thumb about-mt--130 mb-30 w-img d-none d-sm-block">
                  <img
                    className="about-4"
                    src={lowerRightImage}
                    alt="about page"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="about__wrapper-2 pl-20">
              <div className="section__title-wrapper-2 mb-25">
                <span className="section__title-pre section__title-pre-2">
                  {tagline}
                </span>
                <h2 className="section__title section__title-2">{title}</h2>
              </div>
              <p>{description}</p>
              <div className="about__item-wrapper">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="about__item about__item-green white-bg text-center mb-30">
                      <div className="about__icon mb-15">
                        <i className="flaticon-painting-bucket" />
                      </div>
                      <div className="about__content-2">
                        <h3 className="about__title-2">{card1Title}</h3>
                        <p>{card2Description}</p>
                        <a href={card1Link} className="link-btn">
                          <i className="far fa-arrow-right" />
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="about__item about__item-yellow white-bg text-center mb-30">
                      <div className="about__icon mb-15">
                        <i className="flaticon-sketch" />
                      </div>
                      <div className="about__content-2">
                        <h3 className="about__title-2">{card2Title}</h3>
                        <p>{card2Description}</p>
                        <a href={card2Link} className="link-btn">
                          <i className="far fa-arrow-right" />
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
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

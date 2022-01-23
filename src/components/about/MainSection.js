import React from "react";

export default function MainSection() {
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
                    src="https://via.placeholder.com/369x356"
                    alt="about page"
                  />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <div className="about__thumb mt-45 pr-50 mb-30 w-img">
                  <img
                    className="about-2"
                    src="https://via.placeholder.com/220x200"
                    alt="about page"
                  />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <div className="about__thumb pl-50 mb-30 w-img d-none d-sm-block">
                  <img
                    className="about-3"
                    src="https://via.placeholder.com/220x200"
                    alt="about page"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-6">
                <div className="about__thumb about-mt--130 mb-30 w-img d-none d-sm-block">
                  <img
                    className="about-4"
                    src="https://via.placeholder.com/369x356"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="about__wrapper-2 pl-20">
              <div className="section__title-wrapper-2 mb-25">
                <span className="section__title-pre section__title-pre-2">
                  About Company
                </span>
                <h2 className="section__title section__title-2">
                  Better Painting Solution Company
                </h2>
              </div>
              <p>
                Sed ut perspicis unde omnis iste natus error sit volaccu sante
                dolore lautium totam rem aperiam eaque ques abillo inventore
                veritatis et quasi architeo beate vita dicta sunte
              </p>
              <div className="about__item-wrapper">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="about__item about__item-green white-bg text-center mb-30">
                      <div className="about__icon mb-15">
                        <i className="flaticon-painting-bucket" />
                      </div>
                      <div className="about__content-2">
                        <h3 className="about__title-2">
                          <a href="services-details.html">
                            Professional Painting
                          </a>
                        </h3>
                        <p>
                          Sed ut perspicis unde omnis iste natus error sit
                          volaccu sadolore
                        </p>
                        <a href="services-details.html" className="link-btn">
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
                        <h3 className="about__title-2">
                          <a href="services-details.html">
                            PDCA Certified Member
                          </a>
                        </h3>
                        <p>
                          Sed ut perspicis unde omnis iste natus error sit
                          volaccu sadolore
                        </p>
                        <a href="services-details.html" className="link-btn">
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
}
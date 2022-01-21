import React from "react";
import { Link } from "gatsby";

export default function HomeTitle() {
  return (
    <section className="slider__area">
      <div className="slider__active swiper-container">
        <div className="swiper-wrapper">
          <div
            className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
            data-background="assets/img/slider/slider-1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="slider__content text-center">
                    <span data-animation="fadeInUp" data-delay=".2s">
                      25 Years Of Experience
                    </span>
                    <h2
                      className="slider__title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Painting Service Company
                    </h2>
                    <div
                      className="slider__btn"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                    >
                      <Link to="/services" className="r-btn">
                        our services
                        <i className="far fa-arrow-right" />
                      </Link>
                      {/* <a
                        href="contact.html"
                        className="r-btn r-btn-green mr-10"
                      >
                        contact us <i className="far fa-arrow-right" />
                      </a> */}
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

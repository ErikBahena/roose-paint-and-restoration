import React from "react";
import examImg from "../../content/galleryPosts/example-job/static/img/exteriorExample.jpeg";

export default function HomeService(data) {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
      <div className="services__item p-relative mb-30">
        <div className="services__thumb w-img">
          <img src={examImg} />
        </div>
        <div className="services__content text-center">
          <div className="services__icon">
            <i className="flaticon-paint-1" />
          </div>
          <h3 className="services__title">
            <a href="services-details.html">{data.title}</a>
          </h3>
          <p>{data.description}</p>
          <a href="services-details.html" className="link-btn-2">
            read more
            <i className="far fa-arrow-right" />
            <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

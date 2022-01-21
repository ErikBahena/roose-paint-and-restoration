import React from "react";
import PageTitle from "../components/PageTitle";
import siteInfo from "../../site/settings/siteInfo.json";
import { formatPhonePlain } from "../helpers";

export default function Contact({ location }) {
  return (
    <>
      <PageTitle location={location} />

      <section className="contact__area pt-90 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="section__title-wrapper mb-70 text-center">
                <span className="section__title-pre section__title-pre-3 center">
                  Get In Touch
                </span>
                <h2 className="section__title section__title-2">
                  Click The Button Below
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__btn-3 contact__btn-4">
              <a
                href="https://clienthub.getjobber.com/client_hubs/66a10fe9-55e4-46ed-b1f4-f244789fa028/public/work_request/new?source=social_media"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit" className="r-btn r-btn-black w-100">
                  Request Services <i className="far fa-arrow-right" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact__area contact__padding pt-70 pl-55 pr-55">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-xl-4">
              <div className="contact__item green-bg-2 d-sm-flex align-items-start mb-30">
                <div className="contact__icon mr-35">
                  <i className="far fa-map-marker-alt" />
                </div>
                <div className="contact__content">
                  <h5>Main Location</h5>
                  <p>
                    <a
                      target="_blank"
                      href={siteInfo.googleMapsAddressLink}
                      rel="noreferrer"
                    >
                      {siteInfo.fullBusinessAddress || siteInfo.headerAddress}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4">
              <div className="contact__item green-bg-2 d-sm-flex align-items-start mb-30">
                <div className="contact__icon mr-35">
                  <i className="far fa-envelope-open" />
                </div>
                <div className="contact__content">
                  <h5>Email Address</h5>
                  <p>
                    <a href={`mailto:${siteInfo.supportEmail}`}>
                      {siteInfo.supportEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4">
              <div className="contact__item green-bg-2 d-sm-flex align-items-start mb-30">
                <div className="contact__icon mr-35">
                  <i className="far fa-phone-plus" />
                </div>
                <div className="contact__content">
                  <h5>Phone Number</h5>
                  <p>
                    <a href={`tel:${formatPhonePlain(siteInfo.phone)}`}>
                      {siteInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact__map">
        <div className="container-fluid p-0">
          <div className="row gx-0">
            <div className="col-xxl-12">
              <div className="contact__map-wrapper p-relative">
                <iframe
                  title="business location"
                  src={siteInfo.googleMapsEmbedLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

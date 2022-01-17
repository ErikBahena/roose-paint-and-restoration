import React from "react";
import siteInfo from "../../site/settings/siteInfo.json";
import { formatPhonePlain } from "../helpers";

export default function HeaderTop() {
  return (
    <div className="header__top grey-bg pl-55 pr-55 header__padding d-none d-lg-block">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="header__top-left">
              <div className="header__info">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/Aberdeen,+WA"
                    >
                      <i className="far fa-map-marker-alt" />{" "}
                      {siteInfo.headerAddress}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteInfo.supportEmail}`}>
                      <i className="far fa-envelope-open" />{" "}
                      {siteInfo.supportEmail}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${formatPhonePlain(siteInfo.phone)}`}>
                      <i className="fal fa-phone" /> {siteInfo.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="header__top-right d-flex align-items-center justify-content-end">
              <div className="header__search p-relative mr-20">
                <form action="#">
                  <input type="text" placeholder="Search here" />
                  <button type="submit">
                    <i className="far fa-search" />
                  </button>
                </form>
              </div>
              <div className="header__lang">
                <select>
                  <option>English</option>
                  <option>Bangla</option>
                  <option>Bangla</option>
                  <option>Bangla</option>
                  <option>Bangla</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

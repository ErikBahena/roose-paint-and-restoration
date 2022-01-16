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
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
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

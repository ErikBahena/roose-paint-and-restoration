import { Link } from "gatsby";
import React from "react";
import bgImg from "../assets/img/page-title/page-title-1.jpg";

export default function PageTitle({ location }) {
  return (
    <section
      className="page__title-area pt-160 pb-165 p-relative page__title-overlay"
      data-background={bgImg}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper">
              <h3 className="page__title">
                {location.pathname.replace("/", "")}
              </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {location.pathname.replace("/", "")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

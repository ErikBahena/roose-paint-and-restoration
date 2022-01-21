import { Link } from "gatsby";
import React from "react";
import bgImg from "../assets/img/page-title/page-title-1.jpg";

export default function PageTitle({ location }) {
  return (
    <section
      className="page__title-area pt-70 pb-60 p-relative page__title-overlay"
      data-background={bgImg}
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUaUdB-7QQEFErD1ohMc1HLuKplcJDoVlYTzc0ZDcEbg45v6fxpxNlLTxeVrsYQaZbuA&usqp=CAU")`,
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN6ttPBjvq40IUgzPpJGPScHptKfymDeLRA4LTCbap-mcl5Nrv_SrQR9Mt_8AiPik5fo&usqp=CAU")`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper">
              <h2 className="page__title">
                {location.pathname.replace("/", "")}
              </h2>
              {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {location.pathname.replace("/", "")}
                  </li>
                </ol>
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

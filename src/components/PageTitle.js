import React from "react";

export default function PageTitle({ location, image }) {
  return (
    <section
      className="page__title-area pt-70 pb-60 p-relative page__title-overlay"
      style={{
        backgroundImage: `url("${
          image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneB8CnGLCM7tLrLxPJlbeBRFLp2tgFAprWw&usqp=CAU"
        }")`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper">
              <h2 className="page__title">
                {!location?.pathname
                  ? `${location}`
                  : location?.pathname
                      .slice(location.pathname.lastIndexOf("/") + 1)
                      .toLowerCase()}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

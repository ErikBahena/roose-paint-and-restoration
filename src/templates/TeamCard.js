import React from "react";

export default function TeamCard() {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div className="team__item white-bg mb-30">
        <div className="team__thumb w-img fix">
          <img src="https://via.placeholder.com/370x250" alt="team member" />
        </div>
        <div className="team__content">
          <h3 className="team__title">
            <a href="team-details.html">Shahnewaz Sakil</a>
          </h3>
          <span className="post">Commercial Painter</span>
          <div className="team__social">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

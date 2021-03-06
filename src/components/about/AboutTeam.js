import React from "react";
import TeamCard from "../../templates/TeamCard";

export default function AboutTeam() {
  return (
    <section className="team__area team__bg p-relative z-index-1 pb-30">
      <div className="container">
        <h2 className="section__title text-center pt-70 pb-45">
          Meet Our Team
        </h2>
        <div className="row">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
}

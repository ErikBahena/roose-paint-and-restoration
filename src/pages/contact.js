import React from "react";
import PageTitle from "../components/PageTitle";
import "../assets/css/jobberForm.css";

export default function Contact({ location }) {
  return (
    <>
      <PageTitle location={location} />

      <div className="jobber-form-wrapper">
        <iframe
          className="jobber-work-request"
          src="https://clienthub.getjobber.com/client_hubs/66a10fe9-55e4-46ed-b1f4-f244789fa028/public/work_request/embedded_new?source=embedded_inline"
          sandbox="allow-forms allow-scripts allow-same-origin allow-modals"
        />
      </div>
    </>
  );
}

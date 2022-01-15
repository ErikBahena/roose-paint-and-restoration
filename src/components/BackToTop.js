import React, { useEffect, useState } from "react";

export default function BackToTop() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const btn = document.querySelector(".progress-wrap");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? btn.classList.add("active-progress")
      : btn.classList.remove("active-progress");
  };

  return (
    <div
      className="progress-wrap"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}

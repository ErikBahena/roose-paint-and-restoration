import React from "react";

export default function Pagination({ paginationPageCount }) {
  const pageNumberArr = Array.from(
    { length: paginationPageCount },
    (_, i) => i + 1
  );

  return (
    <div className="basic-pagination">
      <nav>
        <ul>
          <li>
            <a href="blog.html">
              <i className="far fa-angle-left" />
            </a>
          </li>
          {pageNumberArr.length > 1 &&
            pageNumberArr.map((num) => (
              <li>
                <a href="blog.html">{num}</a>
              </li>
            ))}

          <li>
            <a href="blog.html">
              <i className="far fa-angle-right" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

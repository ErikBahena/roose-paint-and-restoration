import React from "react";

export default function Pagination({
  paginationPageCount,
  handleIndexChange,
  index,
}) {
  const pageNumberArr = Array.from(
    { length: paginationPageCount },
    (_, i) => i + 1
  );

  const handleArrowClick = (num) => {
    const newIndex = num + index;

    if (newIndex >= 0 && newIndex <= paginationPageCount - 1) {
      handleIndexChange(newIndex);
    }
  };

  return (
    <div className="basic-pagination">
      <nav>
        <ul>
          <li>
            <div onClick={() => handleArrowClick(-1)}>
              <i className="far fa-angle-left" />
            </div>
          </li>

          {pageNumberArr.map((num) => (
            <li>
              <div
                className={index + 1 === num && "active"}
                onClick={() => handleIndexChange(num - 1)}
              >
                {num}
              </div>
            </li>
          ))}

          <li>
            <div onClick={() => handleArrowClick(1)}>
              <i className="far fa-angle-right" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

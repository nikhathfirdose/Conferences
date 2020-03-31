import React from "react";

function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-items">
        <span>
          <strong>Filter By: </strong>
        </span>
        <input type="search" placeholder="City " />
        {/* <input type="search" placeholder="Month " /> */}
        <input type="search" placeholder="Country " />
        <input type="search" placeholder="Mode of payment" />
      </div>
    </div>
  );
}
export default Filter;

import React from "react";

function Filter() {
  return (
    <div>
      <input list="place" />
      <datalist id="place">
        <option onClick={}>Bangalore</option>
        <option>Delhi</option>
        <option>Oslo</option>

        <option>India</option>
        <option>Chile</option>

        <option>Free</option>
        <option>Paid</option>
      </datalist>
    </div>
  );
}
export default Filter;

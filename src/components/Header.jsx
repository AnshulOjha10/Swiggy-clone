import React from "react";
import "../App.css"
function Header() {
  return (
    <>
      <div className="header">
        <img src="./assets/swiggy-logo.svg" alt="photo" />
        <div className="searchItem">
          <input type="search" name="search" id="search" placeholder="Search for restaurant"/>
          <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
        </div>
      </div>
    </>
  );
}

export default Header;

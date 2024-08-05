import React from "react";
import { useState } from "react";
import "../App.css";

function FilterSection({ selectedCountry, onCountryChange }) {
  const [modal, setModal] = useState(false);
  const countries = [
    "Indian",
    "Canadian",
    "Italian",
    "Japanese",
    "Mexican",
    "Chinese",
    "French",
    "Greek",
    "Spanish",
    "Thai",
  ];
  const handleChange = (event) => {
    onCountryChange(event.target.value);
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="filterSection">
        <div className="allItem">
          <h3>Resturant with online food delivery in your location</h3>
          <div className="filterItems">
            <button onClick={toggleModal} className="btn">
              Filter <i className="fa-solid fa-sliders"></i>{" "}
            </button>
            <button className="btn">
              Sort By <i className="fa-solid fa-angle-down"></i>
            </button>
            <button className="btn">Fast Delivery</button>
            <button className="btn">Ratings 4.0+</button>
            <button className="btn">Pure Veg</button>
            <button className="btn">Offers</button>
            <button className="btn">Rs.300-Rs.600</button>
            <button className="btn">Less than Rs.300</button>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="popupHead">
              <h2>Filter</h2>
              <button className="close-modal" onClick={toggleModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <hr />
            <div className="selection">
              <div className="options">
                <span className="selectedArea">
                  <h3>Area</h3>
                </span>
                <span>
                  <h3>Explore</h3>
                </span>
                <span>
                  <h3>Rating</h3>
                </span>
                <span>
                  <h3>Delivery Time</h3>
                </span>
                <span>
                  <h3>Cuisines</h3>
                </span>
                <span>
                  <h3>Veg/NonVeg</h3>
                </span>
              </div>
              <div className="areaOptions">

                SORT BY -
                
                  {countries.map((country) => (
                    <div className="foodTiles" key={country}>
                      <input
                        type="radio"
                        value={country}
                        id={country}
                        checked={selectedCountry === country}
                        onChange={handleChange}
                        name="Area"
                      />
                      <label htmlFor={country}>{country}</label>
                    </div>
                  ))}
              
                <button className="applybtn" onClick={toggleModal}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterSection;

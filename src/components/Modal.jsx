import React from "react";
import "../App.css";

const Modal = ({ show, onClose, meal }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
          <button className="close-button" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        <div className="details">
          <h2>{meal.strMeal}</h2>
          <p >{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};
export default Modal;

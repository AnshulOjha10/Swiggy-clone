import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import "../App.css"

const Foodcard = ({ country }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        setMeals(response.data.meals);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, [country]);

  const handleCardClick = async (mealId) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      setSelectedMeal(response.data.meals[0]);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching the meal details', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMeal(null);
  };

return(

<div className="maincontent">
      {meals.map((meal) => (
        <div className="FoodCards" key={meal.idMeal} onClick={() => handleCardClick(meal.idMeal)}>
                    <img src={meal.strMealThumb} alt={meal.strMeal}></img>
            <div className="foodDetails">
                <h3><b>{meal.strMeal}</b></h3>
                <div className="Rating">
                          <i className="fa-solid fa-star" style={{color: "white"}}></i>&nbsp;<p> 4.5-5Min</p>
                </div>
                <p className="delivery">Get Fast delivery at you place</p>
            </div>
        </div>
      ))}
      <Modal show={showModal} onClose={handleCloseModal} meal={selectedMeal} />
    </div>
)
}

export default Foodcard
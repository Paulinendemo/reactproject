

import React, { useState } from "react";
import { useParams } from "react-router-dom";



function DrinkInfo() {
  const [items, setItems] = useState();
  const { DrinklId } = useParams();
  
  React.useEffect(() => {
    fetch(`http://localhost:8000/drinks`)
      .then((response) => response.json())
      .then((data) => {
        // filter data to get the drink with the idDrink
        const filteredData = data.filter((item) => {
          return item.idDrink === DrinklId;
          }
        );
        setItems(filteredData[0]);
      });
  }, [DrinklId]);


  return (
    <>
      {!items ? (
        ""
      ) : (
        <>
          <div className="details">
            <img src={items.strDrinkThumb} alt=""></img>
            <div className="inner-details">
              <h1>{items.strDrink}</h1>
              <h2>{items.strArea} Drinks</h2>
              <h3>Category: {items.strCategory}</h3>
            </div>
          </div>

          <div className="res-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <h4>
                {items.strIngredient1}:{items.strMeasure1}
              </h4>
              <h4>
                {items.strIngredient2}:{items.strMeasure2}
              </h4>
              <h4>
                {items.strIngredient3}:{items.strMeasure3}
              </h4>
              <h4>
                {items.strIngredient4}:{items.strMeasure4}
              </h4>
              <h4>
                {items.strIngredient5}:{items.strMeasure5}
              </h4>
              <h4>
                {items.strIngredient6}:{items.strMeasure6}
              </h4>
              <h4>
                {items.strIngredient7}:{items.strMeasure7}
              </h4>
              <h4>
                {items.strIngredient8}:{items.strMeasure8}
              </h4>
            </div>


            <div className="recipeInstructions">
              <h2>Instructions</h2> <br />
              <h4>{items.strInstructions}</h4>
            </div>
          </div>
          
          
        </>
      )}
    </>
  );
}

export default DrinkInfo;


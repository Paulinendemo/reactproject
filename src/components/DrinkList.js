import React from "react";
import { useNavigate } from "react-router-dom";

function DrinkList({ data }) {
  console.log(data);
  let moveTonext = useNavigate();
  return (
    <>
      {!data
        ? "Sorry! Drink not found"
        : data.map((item) => {
            return (
              <div
                className="card"
                key={item.idDrink}
                onClick={() => {
                  moveTonext(`/${item.idDrink}`);
                }}
              >
                <img src={item.strDrinkThumb} alt=""></img>
                <h4>{item.strDrink}</h4>
              </div>
            );
          })}
    </>
  );
}

export default DrinkList;
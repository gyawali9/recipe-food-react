import React from "react";
import "./RecipeTile.css";
function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile" onClick={() => {
          window.open(recipe["recipe"]["url"]);
        }}>
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
}

export default RecipeTile;

import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe: { recipe } }) {
  const {
    label,
    image,
    ingredientLines,
    calories,
    totalWeight,
    cuisineType,
    mealType,
    dishType
  } = recipe;
  return (
    <Link to={ `/recipe-details/${calories.toFixed(0)}` } query={ recipe }>
      <p>{label.toUpperCase()}</p>
      <img src={ `${image}` } alt={ label }></img>
      <ol>
        { ingredientLines.map((ing, index) => <p key={ index }>{ ing }</p>) }
      </ol>
      <p>{calories.toFixed(2)}</p>
      <p>{totalWeight.toFixed(2)}</p>
      <p>{cuisineType}</p>
      <p>{mealType}</p>
      <p>{dishType}</p>
      <hr></hr>
    </Link>
  )
}

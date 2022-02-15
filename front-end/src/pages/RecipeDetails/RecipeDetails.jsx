import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Context from '../../context/Context';

export default function RecipeDetails() {
  const { calories: id } = useParams();
  const { recipes: { suggestedRecipes } } = useContext(Context);
  console.log(suggestedRecipes[0][0].recipe.calories);
  console.log(suggestedRecipes);
  const aux = suggestedRecipes.map((recipes) => recipes.filter(({ recipe }) => recipe.calories.toFixed(0) === id))  
  const {
    label,
    image,
    ingredientLines,
    calories,
    totalWeight,
    cuisineType,
    mealType,
    dishType
  } = aux;
  return (
    <div>
      <p>{label.toUpperCase()}</p>
      <img src={ `${image}` } alt={ label }></img>
      <ol>
        { ingredientLines.map((ing) => <p key={ ing }>{ ing }</p>) }
      </ol>
      <p>{calories.toFixed(2)}</p>
      <p>{totalWeight.toFixed(2)}</p>
      <p>{cuisineType}</p>
      <p>{mealType}</p>
      <p>{dishType}</p>
      <hr></hr>
    </div>
  )
}

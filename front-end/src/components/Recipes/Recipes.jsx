import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import WaitingRecipes from '../WaitingRecipes/WaitingRecipes'

export default function Recipes({ recipes, city }) {
  const { suggestedRecipes, temp, suggestedFood } = recipes;
  const thisCity = city;
  
  return (
    <div>
      <h3>Receitas</h3>
      <h2>{ `You are at ${thisCity.toUpperCase()}!` }</h2>
      <h4>
        {
         suggestedFood.length !== 1 ? `The temperature up there is ${temp}ºC, so we suggest you to eat ${suggestedFood[0]} and ${suggestedFood[1]}!`
         : `The temperature up there is ${temp}ºC, so we suggest you to eat ${suggestedFood[0]}!`
        }
      </h4>
      <h4>Check out the recipes we recommend:</h4>
      { 
        suggestedRecipes ? suggestedRecipes.length === 1 ?
          suggestedRecipes.map((recipe) => recipe.map((recipe, index) => <RecipeCard key={ index } recipe={ recipe } /> ))
          : suggestedRecipes.map((recipe) => recipe.map((recipe, index) => <RecipeCard key={ index } recipe={ recipe } />))
          : <WaitingRecipes />
      }
    </div>
  )
}

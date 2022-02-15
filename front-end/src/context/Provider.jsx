import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [recipes, setRecipes] = useState(0);

  const states = {
    recipes,
    setRecipes,
  };

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  );
}

import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import axios from 'axios';
import ApiError from '../../error/ApiError'
import Recipes from '../Recipes/Recipes';
import WaitingRecipes from '../WaitingRecipes/WaitingRecipes';

export default function City() {
  const [city, setCity] = useState('');
  const [waiting, setWaiting] = useState(true);
  const { recipes, setRecipes } = useContext(Context);

  const getCity = async ({ target }) => {
    setRecipes(null);
    setWaiting(true);
    const thisCity = target.value;
    setCity(thisCity);
    setWaiting(false);
  }

  const sendCity = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/${city}`) // criar services
      setRecipes(data);
    } catch (err) {
      return ApiError.error({ status: 404, message: err })
    }
  }

  return (
    <div>
      <h3>Too hot or too cold?</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      <label htmlFor="city">
        My city:
        <input
          name="city"
          type="text"
          placeholder="Where are you from?"
          onChange={ (e) => getCity(e) }
        />
        <button
          type="submit"
          onClick={ () => sendCity() }
        >
          Show me!
        </button>
        <div className='recipes'>
          {
            waiting ? <WaitingRecipes />
            : city && recipes ? <Recipes recipes={ recipes } city={ city } /> : <WaitingRecipes />
          }
        </div>
      </label>
    </div>
  )
}

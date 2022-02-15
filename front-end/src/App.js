import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';


function App() {
  return (
    <Routes>
      <Route exact path="recipe-details/:calories" element={ <RecipeDetails /> } />
      <Route path="/" element={ <MainPage /> } />
    </Routes>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';

function App() {

  const APP_ID = "0367e014"
  const APP_KEY = "f2dba077b3541e30a3f16e61c2f59d84"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query} &app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }
  return (
    <div className="App">
      <form className='searchform' onSubmit={getSearch}>
        <input className='searchinput' type='text' placeholder='input your recipe' value={search} onChange={updateSearch} />
        <button className='searchbutton' type='submit'>
          Search
        </button>
      </form>

      <div className='recipes'>{recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          Calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} />
      ))};
      </div>
    </div>
  );
}

export default App;

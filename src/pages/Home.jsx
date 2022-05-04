import React from 'react';
import Recipes from '../components/Recipes';
import SearchBlock from '../components/SearchBlock';

function Home() {
  const [recipeList, setRecipeList] = React.useState([]);

  async function fetchRecipeList(ingrs) {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingrs}&number=12&ranking=2&apiKey=89bacf1802a142389a1882a31dc19fd3`,
      );
      const data = await response.json();

      setRecipeList(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="home">
      <SearchBlock fetchRecipeList={fetchRecipeList} />
      <Recipes items={recipeList} />
    </div>
  );
}

export default Home;

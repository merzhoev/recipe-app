import React from 'react';
import { useParams } from 'react-router-dom';

import RecipePreview from '../components/RecipePreview';

function Recipe() {
  const tabs = [
    { name: 'Ingredients', ownClass: 'recipe-info__icon--ingredients' },
    { name: 'How to cook', ownClass: 'recipe-info__icon--pan' },
  ];
  const [activeTab, setActiveTab] = React.useState(0);
  const [recipe, setRecipe] = React.useState(null);
  const { id } = useParams();

  function onTabClick(index) {
    setActiveTab(index);
  }

  React.useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=8236aaf59b45714a92b720cdcf0857df3babaa56`,
      );
      const data = await response.json();

      setRecipe(data);
    }

    fetchRecipe();
  }, []);

  const steps = recipe?.analyzedInstructions[0]?.steps;
  const ingredients = recipe?.extendedIngredients;

  return (
    <div className="recipe">
      <RecipePreview {...recipe} />
      <div className="recipe-info">
        <ul className="recipe-info__list">
          {tabs.map(({ name, ownClass }, index) => {
            const active = index === activeTab ? 'recipe-info__item--active' : '';
            return (
              <li onClick={() => onTabClick(index)} key={index} className="recipe-info__item">
                <i className={`recipe-info__icon ${ownClass} ${active}`}></i>
                <span className={`recipe-info__name ${active}`}>{name}</span>
              </li>
            );
          })}
        </ul>
        <div className="recipe-info__content">
          {activeTab === 0 && ingredients && (
            <ul className="recipe-info__ingred-list">
              {ingredients.map(({ nameClean, measures: { metric } }) => (
                <li key={nameClean} className="recipe-info__ingred-item">
                  <p className="recipe-info__ingred-name">{nameClean}</p>
                  <div className="recipe-info__ingred-line"></div>
                  <p className="recipe-info__ingred-count">
                    {metric.amount} {metric.unitShort}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {activeTab === 1 && steps && (
            <ul className="recipe-info__cook-list">
              {steps.map(({ number, step }) => (
                <li key={number} className="recipe-info__cook-item">
                  <div className="recipe-info__cook-num">
                    <span className="recipe-info__cook-num-text">{number}.</span>
                  </div>
                  <p className="recipe-info__cook-instruction">{step}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipe;

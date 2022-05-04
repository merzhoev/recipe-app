import clock from '../assets/img/clock.png';
import bowl from '../assets/img/bowl.png';
import dollar from '../assets/img/dollar.png';
import like from '../assets/img/like-empty.png';

function RecipePreview({
  title,
  image,
  readyInMinutes,
  servings,
  pricePerServing,
  aggregateLikes,
}) {
  const price = pricePerServing && (pricePerServing / 100).toFixed(2);

  return (
    <>
      <h1 className="recipe__title">{title}</h1>
      <div className="recipe-preview">
        <div className="recipe-preview__img">
          <img src={image} alt="Dish name" />
        </div>
        <ul className="recipe-preview__list">
          <li className="recipe-preview__item">
            <div className="recipe-preview__icon">
              <img src={clock} alt="clock" />
            </div>
            <p className="recipe-preview__name">{readyInMinutes} min</p>
          </li>
          <li className="recipe-preview__item">
            <div className="recipe-preview__icon">
              <img src={bowl} alt="servings" />
            </div>
            <p className="recipe-preview__name">{servings} servings</p>
          </li>
          <li className="recipe-preview__item">
            <div className="recipe-preview__icon">
              <img src={dollar} alt="price" />
            </div>
            <p className="recipe-preview__name">${price} per serving</p>
          </li>
          <li className="recipe-preview__item">
            <div className="recipe-preview__icon">
              <img src={like} alt="likes" />
            </div>
            <p className="recipe-preview__name">{aggregateLikes}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RecipePreview;

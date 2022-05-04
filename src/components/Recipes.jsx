import { Link } from 'react-router-dom';

function Recipes({ items }) {
  return (
    <section className="recipes">
      <ul className="recipes__list">
        {items &&
          items.map(({ id, image, title }) => (
            <li key={id} className="recipes__item">
              <Link to={`/recipe/${id}`} className="recipes__item-link">
                <div className="recipes__item-img">
                  <img src={image} alt="dish" />
                </div>
                <div className="recipes__item-description">
                  <h3 className="recipes__item-title">{title}</h3>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Recipes;

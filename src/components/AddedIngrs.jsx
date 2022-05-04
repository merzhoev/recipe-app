import React from 'react';

function AddedIngrs({ items, removeIngr }) {
  return (
    <div className="search-block__added-ingredients">
      <h4 className="search-block__title">Added ingredients: </h4>
      <ul className="added-ingredients__list">
        {items &&
          items.map((ingr) => (
            <li key={ingr} className="added-ingredients__item">
              <span className="added-ingredients__name">{ingr}</span>
              <button onClick={removeIngr} className="added-ingredients__del-btn">
                &#10006;
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AddedIngrs;

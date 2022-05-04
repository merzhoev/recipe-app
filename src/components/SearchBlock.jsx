import React from 'react';
import Search from './Search';
import AddedIngrs from './AddedIngrs';

function SearchBlock({ fetchRecipeList }) {
  const [addedIngrs, setAddedIngrs] = React.useState([]);

  function addIngr(e) {
    const ingr = e.target.textContent;
    setAddedIngrs([...addedIngrs, ingr]);
  }

  function removeIngr(e) {
    const ingr = e.target.previousSibling.textContent;
    setAddedIngrs(addedIngrs.filter((curIngr) => curIngr !== ingr));
  }

  function onFindBtnClick() {
    const addedIngrsString = addedIngrs.join();
    fetchRecipeList(addedIngrsString);
  }

  return (
    <>
      <h1 className="main__title">Recipes search</h1>
      <section className="search-block">
        <div className="search-block__content">
          <Search addIngr={addIngr} />
          <AddedIngrs items={addedIngrs} removeIngr={removeIngr} />
          <div className="search-block__find-btn-container">
            <button onClick={onFindBtnClick} className="search-block__find-btn">
              Find recipes
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBlock;

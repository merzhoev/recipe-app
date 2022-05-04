import React from 'react';

function Search({ addIngr }) {
  const [timeoutId, setTimeoutId] = React.useState();
  const [autocompleteList, setAutocompleteList] = React.useState([]);
  const [ingrsInput, setIngrsInput] = React.useState('');

  function onTypeIngrsInput(e) {
    setIngrsInput(e.target.value);
  }

  function onAutocompleteItemClick(e) {
    addIngr(e);
    setAutocompleteList([]);
    setIngrsInput('');
  }

  React.useEffect(() => {
    async function fetchAutocompleteList() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/ingredients/autocomplete?query=${ingrsInput}&number=10&apiKey=89bacf1802a142389a1882a31dc19fd3`,
        );
        const autocompleteList = await response.json();

        setAutocompleteList(autocompleteList);
      } catch (err) {
        console.log(err);
      }
    }

    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(fetchAutocompleteList, 500));
  }, [ingrsInput]);

  return (
    <div className="search-block__search">
      <h4 className="search-block__title">Enter the ingredients: </h4>
      <input
        value={ingrsInput}
        onChange={onTypeIngrsInput}
        type="text"
        className="search-block__search-field"
      />
      {autocompleteList.length > 0 && (
        <ul className="search-block__autocomplete-ingrs">
          {autocompleteList.map(({ name }) => (
            <li onClick={onAutocompleteItemClick} key={name} className="autocomplete-ingrs__item">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;

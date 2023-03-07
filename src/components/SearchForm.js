import React, { useRef } from 'react';
import { useGlobalContext } from '../context/Context';
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const SearchValue = useRef('');

  React.useEffect(() => {
    SearchValue.current.focus();
  }, []);

  const searchFunctionality = () => {
    setSearchTerm(SearchValue.current.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section_search">
      <form onSubmit={handlesubmit} className="section_search_form">
        <div className="section_search_box">
          <label className="section_search_box_label" htmlFor="name">
            SEARCH YOUR FAVORITE COCKTAIL
          </label>
          <input
            ref={SearchValue}
            onChange={searchFunctionality}
            type="text"
            id="name"
            className="section_search_box_input"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

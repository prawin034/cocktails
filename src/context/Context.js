import React, { useCallback, useContext, useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //loading state
  const [loading, setloading] = useState(true);
  //searchstate
  const [searchTerm, setSearchTerm] = useState('a');
  //cocktails
  const [cocktails, setCocktails] = useState([]);

  //FETCH DATA

  const fetchDrinks = useCallback(async () => {
    setloading(true);
    try {
      const Response = await fetch(`${url}${searchTerm}`);

      const data = await Response.json();

      const { drinks } = data;

      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { strDrink, idDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setloading(false);
    } catch (error) {
      console.log(error.message);
      setloading(false);
    }
  }, [searchTerm]);

  //THIS USEFFECT WILL RUN EVERYTIME WHEN SEARCH FUNCTIONALITY CHANGES

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,

        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

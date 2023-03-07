import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams, useNavigate, Link } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const CockTailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setloading] = useState(true);
  const [cocktail, setcocktail] = useState([null]);

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch(`${url}${id}`);

        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strAlcoholic: info,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = data.drinks[0];

          const ingridients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          ];
          const cocktails = {
            name,
            info,
            image,
            category,
            glass,
            instruction,
            ingridients,
          };
          setcocktail(cocktails);
        } else {
          setcocktail(null);
        }
        setloading(false);
      } catch (error) {
        setloading(false);
        console.log(error.message);
      }
    }
    fetchDrinks();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!cocktail) {
    return <h2>NO COCKTAIL TO DISPLAY</h2>;
  }

  const { name, info, image, category, glass, instruction, ingridients } =
    cocktail;

  return (
    <article className="cocktail_details">
      <div className="cocktail_details_center">
        <button className="btn_back" onClick={() => navigate('/')}>
          BACK
        </button>
        <h2 className="cocktail_details_name">{name}</h2>
      </div>

      <div className="cocktail_grid">
        <div className="cocktail_details_img">
          <img src={image} alt={name} />
        </div>

        <div className="cocktail_details_info">
          <div>
            <h3>NAME </h3>
            <span>{name}</span>{' '}
          </div>
          <div>
            <h3>CATEGORY </h3>
            <span>{category}</span>{' '}
          </div>

          <div>
            <h3>INFO </h3>
            <span>{info}</span>{' '}
          </div>
          <div>
            <h3>GLASS </h3>
            <span>{glass}</span>{' '}
          </div>
          <div>
            <h3>INSTRUCTION</h3>
            <span className="instruction">{instruction}</span>
          </div>
          <div>
            <h3>INGRIENTS</h3>
            {ingridients.map((item, index) => {
              return item ? (
                <span className="ingrients" key={index}>
                  {item}
                </span>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CockTailPage;

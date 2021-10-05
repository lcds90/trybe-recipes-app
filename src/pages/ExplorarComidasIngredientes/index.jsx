import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer, Header } from '../../components';
import fetchAPI from '../../services/fetchAPI';
import Context from '../../context/Context';

const ExplorarComidasIngredientes = () => {
  const TWELVE = 12;
  const { handleSearch } = useContext(Context);
  const [ingredientsList, setIngredientsList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredients = await fetchAPI('fetchMealIngredientsByList', '');
      setIngredientsList(ingredients);
    };
    fetchIngredients();
  }, []);

  return (
    <>
      <Header title="Explorar Ingredientes" displaySearchBtn={ false } />

      {ingredientsList && ingredientsList.slice(0, TWELVE)
        .map((ingredient, i) => (
          <article key={ i } data-testid={ `${i}-ingredient-card` }>
            <Link
              onClick={ () => handleSearch(
                { query: ingredient.strIngredient, typeSearch: 'byIngredient', location },
              ) }
              to="/comidas"
            >
              <img
                alt={ `Foto do ingrediente ${ingredient.strIngredient}` }
                data-testid={ `${i}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              />
              <p data-testid={ `${i}-card-name` }>
                {ingredient.strIngredient}
              </p>
            </Link>
          </article>
        ))}

      <Footer />
    </>
  );
};

export default ExplorarComidasIngredientes;

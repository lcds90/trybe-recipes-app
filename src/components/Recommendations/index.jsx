import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import style from './Recommendations.module.css';

const Recommendations = ({ recommendations }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const SIX = 6;
  const location = useLocation();
  const verifyPath = location.pathname.includes('bebidas');

  return (
    <section className={ style.section }>
      <h3>Recomendações</h3>
      <Carousel
        responsive={ responsive }
      >
        {recommendations && recommendations.slice(0, SIX)
          .map((recipe, i) => (
            <article
              className={ style.recipe }
              key={ i }
              data-testid={ `${i}-recomendation-card` }
            >
              <img
                src={ verifyPath ? recipe.strMealThumb : recipe.strDrinkThumb }
                alt={ `Foto referente a receita de ${
                  verifyPath ? recipe.strMeal : recipe.strDrink}` }
              />
              <p data-testid={ `${i}-recomendation-title` }>
                <Link
                  to={ verifyPath
                    ? `/comidas/${recipe.idMeal}`
                    : `/bebidas/${recipe.idDrink}` }
                >
                  {verifyPath ? recipe.strMeal : recipe.strDrink}
                </Link>
              </p>
            </article>
          ))}
      </Carousel>
    </section>
  );
};

Recommendations.propTypes = {
  recommendations: PropTypes.arrayOf(Object).isRequired,
};

export default Recommendations;

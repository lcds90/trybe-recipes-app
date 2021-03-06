import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../../context/Context';
import Liked from '../Liked';
import Share from '../Share';
import style from './HeaderRecipes.module.css';

const HeaderRecipes = ({
  category,
  img,
  title,
  url,
}) => {
  const { appState: { recipe } } = useContext(Context);
  return (
    <header className={ style.header }>
      <img
        className={ style.recipePhoto }
        data-testid="recipe-photo"
        src={ img }
        alt={ `Imagem do ${title}` }
      />
      <h2 data-testid="recipe-title">{title}</h2>
      <h3 data-testid="recipe-category">{category}</h3>
      <Liked recipe={ recipe } dataTestId="favorite-btn" />
      <Share destinationUrl={ url } dataTestId="share-btn" />
    </header>
  );
};

const { string } = PropTypes;

HeaderRecipes.propTypes = {
  category: string.isRequired,
  img: string.isRequired,
  title: string.isRequired,
  url: string.isRequired,
};

/*
A foto deve possuir o atributo data-testid="recipe-photo";
O título deve possuir o atributo data-testid="recipe-title";
O texto da categoria deve possuir o atributo data-testid="recipe-category";
    */

export default HeaderRecipes;

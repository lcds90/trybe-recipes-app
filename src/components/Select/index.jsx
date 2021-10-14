import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fetchArea from '../../services/fetchArea';
import style from './Select.module.css';

const Select = ({ onChange }) => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchArea().then((result) => setAreas(result));
  }, []);

  if (!areas) return <div>Carregando</div>;

  return (
    <section className={ style.section }>
      <select
        className={ style.select }
        data-testid="explore-by-area-dropdown"
        onChange={ onChange }
      >
        <option value="" data-testid="All-option">All</option>
        {areas
          .map((area) => (
            <option data-testid={ `${area}-option` } key={ area }>
              {area}
            </option>))}
      </select>
    </section>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;

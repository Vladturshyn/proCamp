import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { words } from '../../constants';

const CardsItem = ({ data, showInfo }) => (
  <>
    {data.map(data => (
      <div key={data.id} className="short-card-wrapper">
        <div className="short-card__img">
          <img src={data.img} alt="img" />
        </div>
        <div className="short-card__info">
          <h2 className="short-card__title">{data.title}</h2>
          <p className="short-card__description">{data.description}</p>
          <div className="short-card__controls">
            <Button onClick={() => showInfo(data.id)} text={words.edit} />
          </div>
        </div>
      </div>
    ))}
  </>
);

CardsItem.propTypes = {
  data: PropTypes.array.isRequired,
  showInfo: PropTypes.func
};

export default CardsItem;


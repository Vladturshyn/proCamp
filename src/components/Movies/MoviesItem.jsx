import React from 'react';
import PropTypes from 'prop-types';


const MoviesItem = ({ data, showInfo }) => (
  <>
    {data.map(data => (
      <div key={data.id} className="short-card-wrapper" onClick={()=>showInfo(data.id)}>
        <div className="short-card__img">
          <img src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`} alt="img" />
        </div>
        <div className="short-card__info">
          <h2 className="short-card__title">{data.title}</h2>
          <p className="short-card__description">{data.overview}</p>
        </div>
      </div>
    ))}
  </>
);

MoviesItem.propTypes = {
  data: PropTypes.array.isRequired,
  showInfo: PropTypes.func.isRequired
};

export default MoviesItem;


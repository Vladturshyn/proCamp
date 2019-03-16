import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { words } from '../../constants';

const CardsEditModal = ({ data, handleModalClose, submitChanges }) => (
  <div className="modal">
    <div className="modal-content">
      <span onClick={handleModalClose} className="close">
        &times;
      </span>
      <div className="short-card-wrapper">
        {data.img && (
          <div className="short-card__img">
            <img src={data.img} alt="img" />
          </div>
        )}
        <div className="short-card__info">
          <form id="editForm" onSubmit={submitChanges}>
              <input name="dataTitle" defaultValue={data.title} type="text" />
              <textarea
                name="dataDescription"
                defaultValue={data.description}
                type="text"
              />
            <Button onClick={submitChanges} text={words.save} className={'--margin'}/>
            <Button onClick={handleModalClose} text={words.exit} />
          </form>
        </div>
      </div>
    </div>
  </div>
);

CardsEditModal.propTypes = {
  data: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func,
  submitChanges: PropTypes.func
}

export default CardsEditModal;

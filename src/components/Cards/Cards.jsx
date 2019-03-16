import React, { Component } from 'react';
import CardsItem from './CardsItem';
import CardsEditModal from './CardsEditModal';
import data from '../../data/index.js';
import './card.scss';

export default class Cards extends Component {
  state = {
    modalShow: false,
    id: ''
  };

  showInfo = id => {
    this.setState({
      modalShow: true,
      id
    });
  };

  handleModalClose = () => {
    this.setState({
      modalShow: false
    });
  };

  submitChanges = e => {
    const { id } = this.state;
    e.preventDefault();
    const editForm = document.getElementById('editForm');
    data.map(element => {
      if (element.id === id) {
        element.title = editForm.dataTitle.value;
        element.description = editForm.dataDescription.value;
      }
      return null;
    });
    this.handleModalClose();
  };

  render() {
    const { id, modalShow } = this.state;
    return (
      <>
        <CardsItem data={data} showInfo={this.showInfo} />
        {modalShow && (
          <CardsEditModal
            handleModalClose={this.handleModalClose}
            submitChanges={this.submitChanges}
            data={data.find(el => el.id === id)}
          />
        )}
      </>
    );
  }
}
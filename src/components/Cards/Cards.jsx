import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsEditModal from './CardsEditModal';
import CardsItem from './CardsItem';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import './card.scss';

class Cards extends Component {
  state={
    id:'',
    modalShow: false
  }
  componentDidMount(){
    this.props.fetchMovies();
  }

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
    const {results} = this.props;

    e.preventDefault();
    const editForm = document.getElementById('editForm');
    results.map(element => {
      if (element.id === id) {
        element.title = editForm.dataTitle.value;
        element.overview = editForm.dataDescription.value;
      }
      return null;
    });
    this.handleModalClose();
  };

  render() {
    const {results} = this.props;
    const {id, modalShow} = this.state;
    return (
      <>
        {results ? <CardsItem data={results} showInfo={this.showInfo}/> : <div>Loading ... </div>} 
        {modalShow && (
          <CardsEditModal
            handleModalClose={this.handleModalClose}
            submitChanges={this.submitChanges}
            data={results.find(el => el.id === id)}
          />
        )}
      </>
    );
  }
}

Cards.propTypes = {
  results: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    results: state.movie.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
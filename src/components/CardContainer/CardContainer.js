import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import { fetchHouseData } from '../../helper/apiCalls.js';
import { scrubHouseData } from '../../helper/dataCleaners.js';
import { addHouses } from '../../actions';
import PropTypes from 'prop-types';


class CardContainer extends Component {

  async componentDidMount() {
    const results = await fetchHouseData();
    const cleanHouses = await scrubHouseData(results);
    this.props.addHouses(cleanHouses);
  }

  cardsToDisplay = (houses) => {
    return houses.map(house => {
      return <Card {...house}/>;
    });
  }
  
  render() {
    return (
      <div className='Container'>
        {this.cardsToDisplay(this.props.houses)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  houses: state.houses
});

const mapDispatchToProps = dispatch => ({
  addHouses: (houses) => dispatch(addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);


CardContainer.propTypes = {
  houses: PropTypes.array,
  addHouses: PropTypes.func.isRequired
};
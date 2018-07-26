import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import { fetchHouseData } from '../../helper/apiCalls.js';
import { scrubHouseData } from '../../helper/dataCleaners.js';
import { addHouses } from '../../actions';
import PropTypes from 'prop-types';
import wolf from './wolf.gif';


export class CardContainer extends Component {

  async componentDidMount() {
    const results = await fetchHouseData();
    const cleanHouses = await scrubHouseData(results);
    this.addHousesToStore(cleanHouses);
  }

  addHousesToStore = cleanHouses => {
    this.props.addHouses(cleanHouses);
  }

  cardsToDisplay = (houses) => {
    return houses.map(house => {
      return <Card {...house}/>;
    });
  }
  
  render() {
    if (this.props.houses.length > 1) {
      return (
        <div className='Container'>          
          {this.cardsToDisplay(this.props.houses)}
        </div>
      );
    } else {
      return (
        <div className='Container'>
          <img src={wolf} alt='horse-gif' className='wolf'/>
        </div> 
      );
    }
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export const mapDispatchToProps = dispatch => ({
  addHouses: (houses) => dispatch(addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);


CardContainer.propTypes = {
  houses: PropTypes.array,
  addHouses: PropTypes.func.isRequired
};
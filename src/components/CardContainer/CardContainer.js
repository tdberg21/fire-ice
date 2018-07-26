import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import { fetchHouseData } from '../../helper/apiCalls.js';
import { scrubHouseData } from '../../helper/dataCleaners.js';
import { addHouses } from '../../actions';


class CardContainer extends Component {

  async componentDidMount() {
    const results = await fetchHouseData();
    console.log(results)
    const cleanHouses = await scrubHouseData(results);
    console.log(cleanHouses);
    this.props.addHouses(cleanHouses);
  }

  cardsToDisplay = (houses) => {
    return houses.map(house => {
      return <Card {...house}/>;
    });
  }
  
  render() {
    return (
      <div className='CardContainer'>
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


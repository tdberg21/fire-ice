import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { fetchHouseData } from '../../helper/apiCalls.js';
import { scrubHouseData } from '../../helper/dataCleaners.js';

class App extends Component {

  async componentDidMount() {
    const results = await fetchHouseData();
    console.log(results)
    const cleanHouses = await scrubHouseData(results);
    console.log(cleanHouses);
    this.props.addHouses(cleanHouses);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  addHouses: func.isRequired
};

const mapStateToProps = (state) => ({
  houses: state.houses
 });
const mapDispatchToProps = dispatch => ({ 
  addHouses: (houses) => dispatch(addHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

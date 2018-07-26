import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { fetchHouseData } from '../../helper/apiCalls.js';
import { scrubHouseData } from '../../helper/dataCleaners.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {/* <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button> */}
        </div>
        <div className='Display-info'>
          <CardContainer/>
        </div>
      </div>
    );
  }
}

export default App;

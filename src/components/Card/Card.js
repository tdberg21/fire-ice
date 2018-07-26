import React, { Component } from 'react';
import { fetchMembers } from '../../helper/apiCalls.js';
import { addMembers } from '../../actions';
import { connect } from 'react-redux';

export class Card extends Component {
  constructor () {
    super();

    this.state = {
      members: ''
    };
  }

  addSwornMembers = async (swornMembers, house) => {
    const response = await fetchMembers(swornMembers);
    this.props.addMembers(response, house);
    this.displayMembers(response, house);
  };

  displayMembers = (members) => {
    this.setState({
      members
    });
  }

  render () {
    return (
      <div className='Card' onClick={() => this.addSwornMembers(this.props.swornMembers, this.props.name)}>
        <h2>{this.props.name}</h2>
        <h3>Founded: {this.props.founded}</h3>
        <p>Seats: {this.props.seats}</p>
        <p>Titles: {this.props.titles}</p>
        <p>Ancestral Weapons: {this.props.ancestralWeapons}</p>
        <p>Coat of Arms: {this.props.coatOfArms}</p>
        <p>
          {this.props.members[this.props.name]}
        </p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  members: state.members
});

export const mapDispatchToProps = dispatch => ({
  addMembers: (members, house) => dispatch(addMembers(members, house))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

import React, { Component } from 'react';
import { fetchMembers } from '../../helper/apiCalls.js';
import { addMembers } from '../../actions';
import { connect } from 'react-redux';


let membersToDisplay;

export class Card extends Component {

  addSwornMembers = async (swornMembers) => {
    const response = await fetchMembers(swornMembers);
    this.props.addMembers(response);
    membersToDisplay = this.displayMembers(response);
    return membersToDisplay;
  };

  displayMembers = (members) => {
    console.log(members);
    membersToDisplay =  members.map(memberName => {
      return <ul> {memberName} </ul>
    });
    return membersToDisplay;
  }

  render () {
    return (
      <div className='Card' onClick={() => this.addSwornMembers(this.props.swornMembers)}>
        <h2>{this.props.name}</h2>
        <h3>Founded: {this.props.founded}</h3>
        <p>Seats: {this.props.seats}</p>
        <p>Titles: {this.props.titles}</p>
        <p>Ancestral Weapons: {this.props.ancestralWeapons}</p>
        <p>Coat of Arms: {this.props.coatOfArms}</p>
        <p>
          {membersToDisplay}
        </p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  members: state.members
});

export const mapDispatchToProps = dispatch => ({
  addMembers: (members) => dispatch(addMembers(members))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

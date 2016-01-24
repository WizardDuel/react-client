import React from 'react';
import Armory from './Armory.react';
var BattleRoom = require('./BattleRoom.react');
var KillRoom = require('./KillRoom.react');
var io = require('socket.io-client');

var WizardDuel = React.createClass({
  getInitialState: function(){
    return {
      gameStatus: 'Setup',
      socket: null,
      winner: null,
    }
  },
  render: function(){

    var room;
    switch(this.state.gameStatus) {
      case 'Setup':
        room = <Armory enterBattle={this.enterBattle}/>;
        break;
      case 'Battle':
        room = <BattleRoom endBattle={this.endBattle} specialSpells={this.state.spells}/>
        break;
      case 'Game Over':
        room = <KillRoom reset={this.reset} winner={this.state.winner}/>
        break;
    }

    return (
      <section className="container-fluid">
        {room}
      </section>

    )
  },
  enterBattle: function(spells){
    this.replaceState({
      gameStatus: 'Battle'
    })
    this.setState({spells:spells})
  },
  endBattle: function(winner){
    this.replaceState({
      gameStatus: 'Game Over',
      winner: winner,
    })
  },
  reset: function(){
    this.replaceState({
      gameStatus: 'Setup'
    })
  },

})
module.exports = WizardDuel;

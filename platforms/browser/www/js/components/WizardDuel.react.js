var React = require('react');
var WaitingRoom = require('./WaitingRoom.react');
var BattleRoom = require('./BattleRoom.react')
var io = require('socket.io-client');

var WizardDuel = React.createClass({
  getInitialState: function(){
    return {
      inBattle: false,
      socket: null,
      winner: false,
    }
  },
  render: function(){

    var room = <WaitingRoom enterBattle={this.enterBattle}/>
    if (this.state.inBattle) room = <BattleRoom />

    return (
      <section className="container-fluid">
        {room}
      </section>

    )
  },
  enterBattle: function(){
    this.replaceState({
      inBattle: true
    })
  }

})
module.exports = WizardDuel;

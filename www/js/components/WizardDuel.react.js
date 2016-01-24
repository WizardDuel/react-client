import React from 'react';
import Armory from './Armory.react';
import BattleRoom from './BattleRoom.react';
import KillRoom from './KillRoom.react';
import io from 'socket.io-client';

export default class WizardDuel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameStatus: 'Setup',
      socket: null,
      winner: null,
    }
  }

  render() {
    let room;
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
  }

  enterBattle(spells) {
    this.replaceState({
      gameStatus: 'Battle'
    })
    this.setState({spells:spells})
  }

  endBattle(winner) {
    this.replaceState({
      gameStatus: 'Game Over',
      winner: winner,
    })
  }

  reset() {
    this.replaceState({
      gameStatus: 'Setup'
    })
  }

}

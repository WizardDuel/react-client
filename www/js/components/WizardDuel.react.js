import React from 'react';
import Armory from './Armory.react';
import BattleRoom from './BattleRoom.react';
import KillRoom from './KillRoom.react';
import io from 'socket.io-client';
import {GameStore as store} from '../stores/gameStore';

store.subscribe(() => {
  console.log(store.getState())
});

export default class WizardDuel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameStatus: 'Setup',
      socket: null,
      winner: null,
    }
    this.enterBattle = this.enterBattle.bind(this)
    this.endBattle = this.endBattle.bind(this)
    this.reset = this.reset.bind(this)
  }
  componentDidMount(){
    store.subscribe(() => { this.forceUpdate() })
  }

  render() {
    let state = store.getState()
    let room;
    switch(store.getState().gameStatus) {
      case 'Setup':
        room = <Armory enterBattle={this.enterBattle}/>;
        break;
      case 'Battle':
        room = <BattleRoom endBattle={this.endBattle} specialSpells={state.spells}/>
        break;
      case 'Game Over':
        room = <KillRoom reset={this.reset} winner={state.winner}/>
        break;
    }

    return (
      <section className="container-fluid">
        {room}
      </section>

    )
  }

  enterBattle(spells) {
    store.dispatch({ type: 'UPDATE_STATUS', updates: {gameStatus:'Battle', spells} })
  }

  endBattle(winner) {
    store.dispatch({type: 'UPDATE_STATUS', updates: {gameStatus:'Game Over', winner} })
  }

  reset() {
    store.dispatch({type: 'UPDATE_STATUS', updates: {gameStatus:'Setup', winner: null}})
  }

}

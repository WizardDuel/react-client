import React from 'react';
import Armory from './Armory.react';
import BattleRoom from './BattleRoom.react';
import KillRoom from './KillRoom.react';
import io from 'socket.io-client';
import { createStore } from 'redux';

const initialState = {
  gameStatus: 'Setup',
  socket: null,
  winner: null,
}

function gameSetup(state = initialState, action){
  switch(action.type) {
    case 'UPDATE_STATUS':
      return Object.assign({}, state, action.updates)
    default:
      return state
  }
}

let store = createStore(gameSetup);

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

  render() {
    var state = store.getState()
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
    store.dispatch({ type: 'UPDATE_STATUS', updates: {gameStatus:'Battle'} })
    this.setState({spells:spells})
  }

  endBattle(winner) {
    store.dispatch({type: 'UPDATE_STATUS', updates: {gameStatus:'Game Over', winner} })
    this.setState({
      gameStatus: 'Game Over',
      winner: winner,
    })
  }

  reset() {
    store.dispatch({type: 'UPDATE_STATUS', updates: {gameStatus:'Setup', winner: null}})
    this.setState({
      gameStatus: 'Setup'
    })
  }

}

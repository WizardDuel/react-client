import { createStore } from 'redux';

export const InitialState = {
  gameStatus: 'Setup',
  socket: null,
  winner: null,
  spells: [],
}

function gameSetup(state = InitialState, action){
  switch(action.type) {
    case 'UPDATE_STATUS':
      return Object.assign({}, state, action.updates);
    case 'MODIFY_SPELLS':
      return Object.assign({}, state, action.updates);
    default:
      return state
  }
}

export const GameStore = createStore(gameSetup);

import { createStore } from 'redux';

const initialState = {
  gameStatus: 'Setup',
  socket: null,
  winner: null,
  spells: null,
}

function gameSetup(state = initialState, action){
  switch(action.type) {
    case 'UPDATE_STATUS':
      return Object.assign({}, state, action.updates)
    default:
      return state
  }
}

export const GameStore = createStore(gameSetup);

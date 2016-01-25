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
    case 'ADD_SPELL':
      return Object.assign({}, state, {spells: [...state.spells, action.spell]})
    case 'REMOVE_SPELL':
      return Object.assign({}, state,
        {spells: state.spells.filter((s) => { return s.id !== action.spell.id })})
    default:
      return state
  }
}

export const GameStore = createStore(gameSetup);

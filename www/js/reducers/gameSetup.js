const initialState = [
  {
    gameStatus: 'Setup',
    socket: null,
    winner: null,
  }
];

export default function gameSetup(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

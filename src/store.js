import { createStore } from 'redux';


// llena tablero de forma aleatoria
const fillMatrix = (cards, mtz_board) => {
  let row_random, col_random;
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < 2; j++) {
      do {
        row_random = Math.round(Math.random() * (3) + 0);
        col_random = Math.round(Math.random() * (4) + 0);
        console.log(row_random);
        console.log(col_random);
      } while(mtz_board[row_random][col_random] !== 0);
      mtz_board[row_random][col_random] = cards[i];
    }
  }
  return mtz_board;
}

const reducer = (state, action) => {
  if(action.type === "FILL_MATRIX"){
    console.log("estado",state);
    return {
      ...state,
      mtz_board: fillMatrix(action.cards, action.mtz_board),
      board_ready: true

    };
  }
  return state;
};

export default createStore(reducer, { cards: [
  {id: 1, img:"", turn:false},
  {id: 2, img:"", turn:false},
  {id: 3, img:"", turn:false},
  {id: 4, img:"", turn:false},
  {id: 5, img:"", turn:false},
  {id: 6, img:"", turn:false},
  {id: 7, img:"", turn:false},
  {id: 8, img:"", turn:false},
  {id: 9, img:"", turn:false},
  {id: 10, img:"", turn:false}
], mtz_board: [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
],
board_ready: false});

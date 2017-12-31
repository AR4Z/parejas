import { createStore } from 'redux';


// llena tablero de forma aleatoria
const fillMatrix = (cards, mtz_board) => {
  let row_random, col_random;
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < 2; j++) {
      do {
        row_random = Math.round(Math.random() * (3) + 0);
        col_random = Math.round(Math.random() * (4) + 0);
      } while(mtz_board[row_random][col_random] !== 0)
      mtz_board[row_random][col_random] = JSON.parse(JSON.stringify(cards[i]));
    }
  }
  return mtz_board;
}

const turnsPlay = (board, row, col) => {
  console.log("volteando fiicha", row, col)
  console.log('./images/' + board[row][col].id + '.png')
  board[row][col].img = './images/' + board[row][col].id + '.png';
  board[row][col].turn_play =  true;
  console.log("nueva",board[row][col].img)
  return board;
}
// ayudante para redux
const reducer = (state, action) => {
  if(action.type === "FILL_MATRIX"){
    console.log("estado",state);
    return {
      ...state,
      mtz_board: fillMatrix(action.cards, action.mtz_board),
      board_ready: true

    };
  } else if(action.type === "TURN_PLAY") {
    var clone = state.mtz_board.map(function(arr) {
      return arr.slice();
    });
    console.log("copy", clone, action.row, action.col);
    turnsPlay(clone, action.row, action.col);
    console.log("nueva", clone);
    return {
      ...state,
      mtz_board: clone,
    }
  }
  return state;
};


// estado inicial
export default createStore(reducer, { cards: [
  {id: 1, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 2, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 3, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 4, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 5, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 6, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 7, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 8, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 9, img:"./images/flecha.png", turn_perm:false, turn_play: false},
  {id: 10, img:"./images/flecha.png", turn_perm:false, turn_play: false}
], mtz_board: [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
],
board_ready: false});

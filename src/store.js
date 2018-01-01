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
  if(board[row][col].turn_play & !board[row][col].turn_perm){
    board[row][col].turn_play = false;
  } else if(!board[row][col].turn_perm){
    board[row][col].turn_play =  true;
  }
  return board;
}

const success = (flipedCards) => {
  return flipedCards[0][0].id === flipedCards[1][0].id;
}

// ayudante para redux
const reducer = (state, action) => {
  if(action.type === "FILL_MATRIX"){
    return {
      ...state,
      mtz_board: fillMatrix(action.cards, action.mtz_board),
      board_ready: true,
      movidas:[]

    };
  } else if(action.type === "TURN_PLAY") {
    let clone = state.mtz_board.map(function(arr) {
      return arr.slice();
    });
    turnsPlay(clone, action.row, action.col);
    console.log("desde state.movidas", state.movidas)
    if (state.movidas.length === 2){
      if(success(state.movidas)){
        clone[state.movidas[0][1]][state.movidas[0][2]].turn_perm = true;
        clone[state.movidas[0][1]][state.movidas[0][2]].turn_play = false;
        clone[state.movidas[1][1]][state.movidas[1][2]].turn_perm = true;
        clone[state.movidas[1][1]][state.movidas[1][2]].turn_play = false;
        state.movidas = [];
      } else {
        clone[state.movidas[0][1]][state.movidas[0][2]].turn_play = false;
        clone[state.movidas[1][1]][state.movidas[1][2]].turn_play = false;
        state.movidas = [];
      }
    }
    return {
      ...state,
      mtz_board: clone,
      movidas: [...state.movidas, [clone[action.row][action.col], action.row, action.col]]
    };
  } else if(action.type === "SUCCESS"){
    console.log("SUCCESSS")
    return {
      ...state,
      mtz_board: state.mtz_board,
      movidas:[]
    }
  }
  return state;
};


// estado inicial
export default createStore(reducer, { cards: [
  {id: 1, img:"./images/1.png", turn_perm:false, turn_play: false},
  {id: 2, img:"./images/2.png", turn_perm:false, turn_play: false},
  {id: 3, img:"./images/3.png", turn_perm:false, turn_play: false},
  {id: 4, img:"./images/4.png", turn_perm:false, turn_play: false},
  {id: 5, img:"./images/5.png", turn_perm:false, turn_play: false},
  {id: 6, img:"./images/6.png", turn_perm:false, turn_play: false},
  {id: 7, img:"./images/7.png", turn_perm:false, turn_play: false},
  {id: 8, img:"./images/8.png", turn_perm:false, turn_play: false},
  {id: 9, img:"./images/9.png", turn_perm:false, turn_play: false},
  {id: 10, img:"./images/10.png", turn_perm:false, turn_play: false}
], mtz_board: [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
],
board_ready: false,
movidas:[]}
);

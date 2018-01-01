// manejadores de acción

const fillMatrix = (cards, mtz_board) => {
  return {
    type: "FILL_MATRIX",
    cards,
    mtz_board
  };
};

const turnPlay = (mtz_board, row, col) => {
  return {
    type: "TURN_PLAY",
    mtz_board,
    row,
    col
  };
};

const success = () => {
  return {
    type: "SUCCESS"
  };

};

const turnOff = (row, col) => {
  return {
    type: "TURN_OFF",
    row,
    col
  };
};
export { fillMatrix, turnPlay, success, turnOff };

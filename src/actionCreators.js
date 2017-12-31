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
export { fillMatrix, turnPlay };

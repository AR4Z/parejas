const fillMatrix = (cards, mtz_board) => {
  return {
    type: "FILL_MATRIX",
    cards,
    mtz_board
  };
};

export { fillMatrix };

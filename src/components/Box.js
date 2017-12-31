// react
import React from 'react';
// react-redux
import { connect } from 'react-redux';
import { turnPlay } from '../actionCreators';
// material-ui
import Paper from 'material-ui/Paper';

//css
const style = {
  height: 100,
  width: 100
  // margin: 10,
  // textAlign: 'center',
  // display: 'inline-block',
};

// componente caja, cada una de las fichas del tablero
const Box = (props) => {
  // log
  console.log("ss",props.name)
  let card = props.mtz_board[props.n_row][props.n_col];
  console.log(card);
  return (
    <div>
      <Paper style={style} zDepth={3}>
        <img src={card.img} style={{width:'100%', height:'100%'}} onClick={() => props.turnPlay(props.mtz_board, props.n_row, props.n_col)}/>
      </Paper>
    </div>
  );
}
// constructor de estado para redux
const mapStateToProps = state => {
  return {
    cards: state.cards,
    mtz_board: state.mtz_board,
    board_ready: state.board_ready
  };
};

// manejador de acciones para redux
const mapDispatchToProps = dispatch => {
  return {
    turnPlay(mtz_board, row, col){
      dispatch(turnPlay(mtz_board, row, col));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);

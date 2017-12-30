import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import { connect } from 'react-redux';
import { fillMatrix } from '../actionCreators';
import Box from './Box';

// componente tablero en el cual se desarrolla el juego
// agrupa todas las fichas
const Board = (props) => {
  // log
  console.log(props.board_ready);
  // verifica si el tablero ya fue llenado
  if (!props.board_ready){
    props.fillMatrix(props.cards, props.mtz_board);
  }
  // log
  console.log(props.mtz_board);
  return(
    <Card>
    // ERROR
     <CardTitle title="Tablero"/>
     {props.mtz_board.map(i =>

        <Box name={i[0].id}/>

     )}
    </Card>
  );
};

// constructor de estado para redux
const mapStateToProps = state => {
  return {
    cards: state.cards,
    mtz_board: state.mtz_board,
    board_ready: state.board_ready
  };
}
// manejador de acciones para redux
const mapDispatchToProps = dispatch => {
  return {
    // accion de generar el tablero
    fillMatrix(cards, mtz_board) {
      dispatch(fillMatrix(cards, mtz_board));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

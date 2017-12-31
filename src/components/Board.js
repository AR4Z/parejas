import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
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
  return(
    <Card>
    // ERROR
     <CardTitle title="Tablero"/>
     {props.mtz_board.map((row, number_row) =>{
       return(
         <GridList cols={5} cellHeight={100}>
         {row.map((col, number_col) => {
           return(
             <GridTile >
             <Box name={col.id} n_row={number_row} n_col={number_col++}/>
             </GridTile>
           )
         }
         )}
         </GridList>
       )
       number_row++
     }

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

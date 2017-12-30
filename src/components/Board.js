import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import { connect } from 'react-redux';
import { fillMatrix } from '../actionCreators';
import Box from './Box';


const Board = (props) => {
  console.log(props.board_ready);
  if (!props.board_ready){
    props.fillMatrix(props.cards, props.mtz_board);
  }
  console.log(props.mtz_board);
  return(
    <Card>
     <CardTitle title="Tablero"/>
     <Box name={1}/>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.cards,
    mtz_board: state.mtz_board,
    board_ready: state.board_ready
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fillMatrix(cards, mtz_board) {
      dispatch(fillMatrix(cards, mtz_board));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

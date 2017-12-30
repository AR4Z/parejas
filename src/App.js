// react
import React from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

// componentes
import Header from './components/Header';
import Score from './components/Score';
import Board from './components/Board';

// estilos css
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 500,
    overflowY: 'auto',
  }
};
// componente App
const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Header/>
        <div style={styles.root}>
          <GridList style={styles.gridList}>
            <GridTile style={{height:490}}>
              <Board/>
            </GridTile>
            <GridTile>
              <Score/>
            </GridTile>
          </GridList>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

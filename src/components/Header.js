import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = (props) => {
  return (
    <AppBar title='Parejas'
    iconClassNameRight='muidocs-icon-navigation-expand-more'
    showMenuIconButton={false}
    />
  );
};


export default Header;

import './App.css';
import { push as Menu } from 'react-burger-menu'
import React from 'react';
import Navigation from './navigation';
import Main from  './main';


var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  

class App extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }


  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div id="outer-container">
      <Menu styles={ styles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Navigation />
      </Menu>
      <main id="page-wrap">
        <Main />
      </main>
      <footer>Nick Gourlay ©2021</footer>
      </div>
    );
  }
}

export default App;

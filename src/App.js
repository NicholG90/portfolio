import './App.css';
import { elastic as Menu } from 'react-burger-menu'
import React from 'react';
import Navigation from './navigation';
import Main from  './main';


var burgerstyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#f4a261'
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
      background: '#f4a261',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#f4a261'
    },
    bmItemList: {
      color: '#2a9d8f',
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
    return (
      <div id="outer-container">
      <Menu styles={ burgerstyles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Navigation />
      </Menu>
      <main id="page-wrap">
        <Main />
      </main>
      </div>
    );
  }
}

export default App;

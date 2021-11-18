import './App.css';
import { elastic as Menu } from 'react-burger-menu'
import React from 'react';
import Navigation from './navigation';
import Main from  './main';

class App extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }


  render () {
    return (
      <div id="outer-container">
      <header id="burgerHeader">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Navigation />
      </Menu>
      </header>
      <main id="page-wrap">
        <Main />
      </main>
      </div>
    );
  }
}

export default App;

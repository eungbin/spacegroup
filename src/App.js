import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, useHistory } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Routes from './components/Routes';

function App() {

  return (
    <div className="App">
      <NavigationMenu />
      <div className="screen">
        <Routes />
      </div>
    </div>
  );
}

export default () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
};

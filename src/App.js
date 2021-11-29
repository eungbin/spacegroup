import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavigationMenu from "./components/NavigationMenu";
import Routes from "./Routes";

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

// export default App
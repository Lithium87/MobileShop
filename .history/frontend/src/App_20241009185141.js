import React from 'react';
import Header from './components/Header';
import {Outlet} from 'react-router-dom';
import './App.css';

function App () {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default App;

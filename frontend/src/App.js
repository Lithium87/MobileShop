import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet} from 'react-router-dom';

function App () {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}

export default App;

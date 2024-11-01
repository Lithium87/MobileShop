import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom';
import './App.css';

function App () {
  return (
    <React.Fragment>
      <Header />
      <main className="min-h-[calc(100vh - 130px)]">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

// 1:34:58

export default App;
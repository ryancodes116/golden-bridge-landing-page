import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Details from './components/Details';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Details />
      <Footer />
    </div>
  );
};

export default App;

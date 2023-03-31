import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <body className="holy-grail">
    <Header />
    <main className="hg-main">
      <MainContent />
      <Sidebar1 />
      <Sidebar2 />  
    </main>  
    <Footer />
  </body>
   
  );
}

export default App;

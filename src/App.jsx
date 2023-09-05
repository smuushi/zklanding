// import { useState } from 'react'


import './Card.css'


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// import Card from './Card';
import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';
// import Contact from './components/Contact';
// import FAQ from './components/FAQ';

function App() {
  return (

    <>

        <Navbar />
        
        <Routes>
          <Route path="/" exact element={
            <>
              <div id='firstcard' className="card">
                <div>
                  <h1>zkSpin White Paper Title</h1>
                </div>
                
                <div>
                  <p>
                    paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum paper preview lorem ipsum 
                  </p>
                </div>

                <div>
                  <a target='_blank' rel="noreferrer noopener" href="https://justinzhang.substack.com/exploring-the-landscape-of-blockchain)">View Full Paper</a>
                </div>
              </div>

              <div id='secondcard' className='card'>
              </div>
            </>


          } />
           
          
            {/* 
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact" exact component={Contact} />
          <Route path="/faq" exact component={FAQ} /> */}
          
            
        </Routes>
        
        <Footer />
      </>

  );
}

export default App;

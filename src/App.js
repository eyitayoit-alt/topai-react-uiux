import React from 'react';
import {Blog, Header, Footer, Possibility, WhatGP3,Features} from "./containers/index"
import {Navbar,Brand} from "./components/index";

import "./app.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        

        <Navbar />
        <Header />
        </div>
        <Brand />
        <WhatGP3 />
        <Features />
        <Possibility />
        <Blog />
        
        
      <Footer />
    
  
  
     
    
      
      
    </div>
  )
}

export default App

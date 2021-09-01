import logo from '../../logo.svg';
import React from 'react';
import './Footer.css';

function Footer ({book, number}){
    return(
        <footer className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React App
        </p>
      </footer>
    )
}

export default Footer;
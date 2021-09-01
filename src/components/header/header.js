import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

function Header (){
    return(
        <div className="header">
            <div className="header__logo">Book Store</div>
            <div className="header__register">

                <div className="basket__item">
                    <NavLink to="/signin">Basket:</NavLink> {0}
                </div>
                <div className="register__item">
                    <NavLink to="/signin">Sign In</NavLink>   
                </div>

                  
            </div>
            
        </div>

    )
}

export default Header;
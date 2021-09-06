import React, { useContext } from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import { storeContext } from '../../App';



function Header (){

    const {basket, setBasket} = useContext(storeContext)


    return(
        <div className="header">
            <div className="header__logo">Book Store</div>
            <div className="header__register">

                <div className="basket__item">
                    <NavLink to="/basket">Basket:</NavLink> {basket}
                </div>
                <div className="register__item">
                    <NavLink to="/signin">Sign In</NavLink>   
                </div>

                  
            </div>
            
        </div>

    )
}

export default Header;
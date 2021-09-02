import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar (){

    const [burger, setBurger] = useState(false)

    function openBurger(){
        setBurger(!burger)
        console.log(burger)

    }

    function resetBurger(){
        setBurger(false)
    }


    return(
        <div className="navbar">
             <div className="navbar__burger" onClick={openBurger}>M</div>

            <div className={burger ? 'navbar__wraper active' : 'navbar__wraper'}>
                <div className="navbar__item"><NavLink to="/books" onClick={resetBurger}>Main</NavLink></div>
                <div className="navbar__item"><NavLink to="/books" onClick={resetBurger}>Books</NavLink></div>
                <div className="navbar__item"><NavLink to="/about" onClick={resetBurger}>About</NavLink></div>
                <div className="navbar__item"><NavLink to="/addbook" onClick={resetBurger}>Add Book</NavLink></div>
                <div className="navbar__item"><NavLink to="/about" onClick={resetBurger}>Orders</NavLink></div>
            </div>

             {/* <div className="navbar__item">Main</div>
            <div className="navbar__item">Book</div>
            <div className="navbar__item">Store</div>
            <div className="navbar__item">About</div>  */}
           
        </div>
    )
}

export default Navbar;
import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar (){
    return(
        <div className="navbar">
                <div className="navbar__item"><NavLink to="/books">Main</NavLink></div>
                <div className="navbar__item"><NavLink to="/books">Books</NavLink></div>
                <div className="navbar__item"><NavLink to="/about">About</NavLink></div>
                <div className="navbar__item"><NavLink to="/addbook">Add Book</NavLink></div>
                <div className="navbar__item"><NavLink to="/about">Orders</NavLink></div>

             {/* <div className="navbar__item">Main</div>
            <div className="navbar__item">Book</div>
            <div className="navbar__item">Store</div>
            <div className="navbar__item">About</div>  */}
           
        </div>
    )
}

export default Navbar;
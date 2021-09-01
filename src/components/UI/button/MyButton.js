import React from 'react';
import './MyButton.css';

function MyButton ({children,...props}){
    return(
        <button {...props} className='btn'>
            {children}
        </button>

    )
}
export default MyButton
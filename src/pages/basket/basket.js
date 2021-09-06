import React, { useContext, useState } from 'react';
import './basket.css'
import { storeContext } from '../../App';
import MyButton from '../../components/UI/button/MyButton';


function Basket (props){

    const {basket, update} = useContext(storeContext)
    
    

    return(

        <div className="wraper">
            
           
            <h2>Basket</h2>
            <hr/>

            <div>Items in Cart: {basket}</div>
            <br/>
        
            <MyButton onClick={()=>{update(basket>0 ? basket-1 : basket)}}>Remove Item</MyButton>
            

        </div>
        
    )
}

export default Basket
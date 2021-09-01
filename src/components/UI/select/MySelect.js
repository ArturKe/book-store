import React from 'react';
import './MySelect.css';


function MySelect ({options, title, value, onchange}){


    return(
            <div className="my_select">
                <div className="my_select__title">{title} </div>
                <select className="my_select__body" value={value} onChange={event => onchange(event.target.value)}>
                    {
                        options.map(item=> <option key={item.value} value={item.value}>{item.name}</option>)
                    }
                   
                   
                </select>
            </div>
        )
}

export default MySelect;
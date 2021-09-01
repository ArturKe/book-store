import React from 'react';
import './card.css';
import MyButton from '../UI/button/MyButton';


function Card ({book, number}){
    return(
        <div className="card">
            <div className="card__image">
                <img src={book.thumbnailUrl} alt="ima"></img>
            </div>
            <div className="card__desc">
                <div className="card__title">{book.title}</div>
                <div className="card__isbn">ISBN:_{book.isbn}</div>
                <div className="card__autor">Author: {book.authors}</div>
                <div className="card__book_descr">{book.shortDescription}.</div>
            </div>
            <div className="card__buttons">
                <MyButton>Add +</MyButton>
            </div>
            
        </div>
    )
}
export default Card;
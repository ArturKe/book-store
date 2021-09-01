import React, { useEffect, useState } from 'react';
import './cardsList.css';
import Card from '../card/card';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';


function CardList ({books, title}){

    const [newBooks, setNewBooks] = useState([])
    const [searchQuery, setSearchQuery] = useState('')


    useEffect(()=>{
        setNewBooks(books)
    }, [books])

    useEffect(()=>{
        console.log(searchQuery);
        searchQuery.length !== 0 
        ? setNewBooks(books.filter(book => book.title.toLowerCase().includes(searchQuery)))
        : setNewBooks(books)

    }, [searchQuery])



    const setSort =(sort)=>{
        console.log(sort)
        setNewBooks([...books].sort((a,b) => a[sort].localeCompare(b[sort])))
    }


    return(
        <div className="card_list">
            <MyInput placeholder="Search" onChange={e => setSearchQuery(e.target.value.toLowerCase())} />
            <MySelect title={'Sort by'} 
                onchange={setSort}
                options={[{value: 'title', name:'Title'},{value: 'isbn', name:'ISBN'}]}/>
            <hr/>

            <h2 className="card_list__title" style={{textAlign: 'center'}}> 
                {
                newBooks.length !== 0
                ? title
                : 'No any Books'
                }
            </h2>

            <h3> Found {newBooks.length} items</h3>
        

            {
               newBooks.map((item, index) => <Card book={item} key={item.id} />)
            }
            
        </div>
    )
}

export default CardList;
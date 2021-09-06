import React, { useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import './AddBook.css'

function AddBook (props){

    const [bookData, setsignData] = useState({title:'', author:'', description:'', imgLink:''})

    const sendData = (e) => {
        e.preventDefault();
        console.log(bookData);
        console.log('Data Send');
        setsignData({title:'', author:'', description:'', imgLink:''})
        
    }

    return(
        <div className="wraper">
            
        <form className="form_sign_in">
            <h2>Add book</h2>
        
            <MyInput 
                value={bookData.title}
                type = "text"
                placeholder={'Title'}
                onChange={e=>setsignData({...bookData, title: e.target.value})}

            />
            <MyInput
                value={bookData.author}
                placeholder="Author"
                type="text"
                onChange={e=>setsignData({...bookData, author: e.target.value})}
            />

            <MyInput
                value={bookData.description}
                placeholder="Description"
                type="text"
                onChange={e=>setsignData({...bookData, description: e.target.value})}
            />

            <MyInput
                value={bookData.imgLink}
                placeholder="Image link"
                type="text"
                onChange={e=>setsignData({...bookData, imgLink: e.target.value})}
            />

            

            <MyButton onClick={sendData}>Add</MyButton>
           

        </form>

    </div>

    )
}

export default AddBook;
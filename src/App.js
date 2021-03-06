
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import CardsList from './components/cardsList/cardsList';
import About from './components/about/about';
import React, { useState, useEffect, useContext } from 'react';
import SignInForm from './components/forms/SignInForm/SignInForm'
import AddBook from './components/forms/addBook/AddBook';
import Footer from './components/footer/Footer';
import Basket from './pages/basket/basket';

export const storeContext = React.createContext()


function App() {
  const [books,setBooks] = useState([
    {id: 1, title:"Super Book", body:'B This is book about SOme Things'},
    {id: 2, title:"Mega Book", body:'C This is book about SOme Things'},
    {id: 13, title:"Giga Book", body:'A This is book about SOme Things'}
  ])

  
  const[basket,setBasket] = useState(0)

  async function reciveData(){
    const url = 'https://library-crm-default-rtdb.europe-west1.firebasedatabase.app/books.json' 
    try{
      const response = await fetch(url,{method:'GET'})
        // setBooks( await response.json())
        // console.log(response)
      return await response.json()

    } catch(e){
        console.log("Error: " + e)
    }  
  }

async function transformData(){
  const data = await reciveData()
  let newData=[]
  let data2 =[]
  //console.log(data)
  try {
    newData.push(Object.keys(data).map(key => {
      const item = data[key]
      item.id = key
      //console.log(item)
      return item
    }) )  
    console.log(await data)
    // console.log(await newData)
  data2 = newData[0]
  // console.log(data2)
  setBooks(data2)
  console.log(books)
    
  } catch (error) {
    console.log(error)
    setBooks(books)
  }
  
  
  // console.log(data2)
  // console.log(books)
}


useEffect(()=>{
  transformData()
},[])



  return (
   
    <div className="App">


      <storeContext.Provider value={{
        basket: basket,
        update: setBasket

      }}>
        <BrowserRouter>

        <header>
          <Header />
          <Navbar />
        </header>

        <main>
          <Switch>
          
            <Route path="/books">
                  <CardsList books={books} title={"List of Books"}/>  
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/signin">
              <SignInForm />
            </Route>

            <Route path="/addbook">
              <AddBook/>
            </Route>

            <Route path="/basket">
              <Basket/>
            </Route>

            <Redirect to="/books" />

          </Switch>

        </main>

        <footer>
          <Footer />

        </footer>
      
          
        </BrowserRouter>
      </storeContext.Provider>
     
    </div>

  );
}

export default App;

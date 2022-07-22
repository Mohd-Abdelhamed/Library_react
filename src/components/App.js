import "../App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI';
import { Route, Routes } from "react-router-dom";
import Books from "./Books";
import Search from "./Search";

function App() {
  const [book,setBook]=useState([]);



  useEffect(()=>{
    const getBooks=async()=>{
      const BookAPI=await BooksAPI.getAll();
      setBook(BookAPI);
      console.log(BooksAPI.search("rea"))
     
    }
    getBooks();
  },[])

  const changeShelf=({shelf})=>{
    //setBook((bok)=>bok.id !== book.id);
    console.log(shelf)
  }

  return (
    <Routes>
<Route
  exact
  path="/"
  element={<Books book={book} changeShelf={(shelf)=>{changeShelf(shelf)}}/>}
/>
<Route
path="/Search"
element={<Search Book={book}/>}
/>
  </Routes>
  );
}

export default App;

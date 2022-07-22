import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Books=({book,changeShelf})=>{

return(
    <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <Shelf Book={book} ShelfName="currentlyReading" changeShelf={changeShelf}/>
                </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <Shelf Book={book} ShelfName="wantToRead"/>
                </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <Shelf Book={book} ShelfName="read"/> 
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/Search">Add a book</Link>
          </div>
        </div>
    </div>
);
}
export default Books;
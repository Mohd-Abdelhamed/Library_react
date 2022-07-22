import { useState } from "react";
import { Link } from "react-router-dom";
import BookChanger from "./BookChanger";
import * as BookAPI from '../BooksAPI';

const Search=()=>{
  const [search,setSearch]=useState([]);
  const[query,setQuery]=useState("");

    const updateQuery=async(event)=>{
        setQuery(event.trim());
        const searchBooks=await BookAPI.search(event.trim());
        setSearch(searchBooks);
        console.log(search);
    }

return(
    <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event)=>updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                    {
                    search.map((book)=>{
                        console.log(search);
                            return(
                                <li key={book.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage:
                                        `url(${book.imageLinks['thumbnail']})`,
                                    }}
                                    ></div>
                                    <BookChanger book={book} shelfName={book.shelf}/>
                        
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors[0]}</div>
                                </div>
                        </li>
                            );
                        })
}
                
            </ol>
          </div>
        </div>
)
}
export default Search;
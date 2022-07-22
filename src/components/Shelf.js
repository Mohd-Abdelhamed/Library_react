import BookChanger from "./BookChanger";

const Shelf=({Book,ShelfName,changeShelf})=>{
return(
<div className="bookshelf-books">
    <ol className="books-grid">
    
        {Book.filter((book)=>book.shelf===ShelfName).map((book)=>{
            
            console.log(book);
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
            <BookChanger book={book} shelfName={book.shelf} changeShelf={changeShelf}/>

        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
        </div>
</li>
        );
    })}
    
</ol>
</div>              
);
}
export default Shelf;